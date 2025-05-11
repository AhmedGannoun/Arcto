const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const url = require('url');
const ip = require('ip');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const fs = require('fs');
const Store = require('electron-store');

// Initialize store for app settings
const store = new Store();

// Keep a global reference of the window object to avoid garbage collection
let mainWindow;

// Initialize Express app and Socket.io for communication with remote
const expressApp = express();
const server = http.createServer(expressApp);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Set up static file serving
expressApp.use(express.static(path.join(__dirname, 'public')));

// Default port for the server
const PORT = 3000;

// Track connection status
let isConnected = false;

// Store for presentation files
let presentationFiles = [];

// Create the browser window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    minWidth: 600,
    minHeight: 400,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'assets/icon.png'),
    show: false, // Don't show until ready-to-show
    frame: true,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#2f3241',
      symbolColor: '#ffffff'
    }
  });

  // Load the index.html file
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  // Show window when ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Emitted when the window is closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Start the server
  startServer();
}

// Start the Express server and Socket.io
function startServer() {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
    // Get all network interfaces to find WiFi IP
    const networkInterfaces = require('os').networkInterfaces();
    let wifiIPAddress = null;
    
    // Look for WiFi interfaces (common names: Wi-Fi, wlan0, etc.)
    for (const interfaceName in networkInterfaces) {
      // Check if interface name contains common WiFi identifiers
      if (interfaceName.toLowerCase().includes('wi-fi') || 
          interfaceName.toLowerCase().includes('wlan') || 
          interfaceName.toLowerCase().includes('wireless')) {
        
        const interfaces = networkInterfaces[interfaceName];
        // Find IPv4 address in this interface
        for (const iface of interfaces) {
          if (iface.family === 'IPv4' && !iface.internal) {
            wifiIPAddress = iface.address;
            break;
          }
        }
      }
      
      // If we found a WiFi IP, break out of the loop
      if (wifiIPAddress) break;
    }
    
    // Fallback to any IP if WiFi not found
    const ipAddress = wifiIPAddress || ip.address();
    console.log(`IP address: ${ipAddress}${wifiIPAddress ? ' (WiFi)' : ''}`);
    
    // Send IP address to renderer
    if (mainWindow) {
      mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.webContents.send('ip-address', ipAddress);
        mainWindow.webContents.send('connection-status', isConnected);
      });
    }
  });
}

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('Remote device connected');
  isConnected = true;
  
  // Notify renderer about connection
  if (mainWindow) {
    mainWindow.webContents.send('connection-status', isConnected);
  }
  
  // Handle remote control commands
  socket.on('command', (data) => {
    console.log('Received command:', data);
    if (mainWindow) {
      mainWindow.webContents.send('remote-command', data);
    }
  });
  
  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('Remote device disconnected');
    isConnected = false;
    if (mainWindow) {
      mainWindow.webContents.send('connection-status', isConnected);
    }
  });
});

// IPC handlers for renderer communication
ipcMain.on('open-file-dialog', (event) => {
  dialog.showOpenDialog(mainWindow, {
    properties: ['openFile', 'multiSelections'],
    filters: [
      { name: 'Presentations', extensions: ['pptx', 'ppt', 'pdf'] },
      { name: 'All Files', extensions: ['*'] }
    ]
  }).then(result => {
    if (!result.canceled && result.filePaths.length > 0) {
      presentationFiles = result.filePaths;
      event.reply('selected-files', presentationFiles);
    }
  }).catch(err => {
    console.error(err);
  });
});

// Handle file drop from renderer
ipcMain.on('files-dropped', (event, filePaths) => {
  presentationFiles = filePaths;
  console.log('Files dropped:', presentationFiles);
});

// This method will be called when Electron has finished initialization
app.whenReady().then(createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});