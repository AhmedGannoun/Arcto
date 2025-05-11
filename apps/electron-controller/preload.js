// Preload script to expose specific Node.js APIs to the renderer process
const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electron', {
  // Send messages to main process
  send: (channel, data) => {
    // Whitelist channels
    const validChannels = ['open-file-dialog', 'files-dropped'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  // Receive messages from main process
  receive: (channel, func) => {
    const validChannels = ['ip-address', 'connection-status', 'remote-command', 'selected-files'];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender` 
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
  // Remove listeners
  removeAllListeners: (channel) => {
    const validChannels = ['ip-address', 'connection-status', 'remote-command', 'selected-files'];
    if (validChannels.includes(channel)) {
      ipcRenderer.removeAllListeners(channel);
    }
  }
});