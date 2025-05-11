// IPDisplay.js - Component for displaying and detecting IP address

class IPDisplay {
  constructor() {
    this.ipAddressElement = document.getElementById('ip-address');
    this.qrCodeElement = document.getElementById('qr-code');
    this.potentialIPs = [];
    this.init();
  }

  init() {
    this.findIPAddress();
    this.setupElectronIPListener();
  }

  // Function to find WiFi IPv4 address directly in the browser
  async findIPAddress() {
    try {
      // First try using the WebRTC method to get local IP
      const pc = new RTCPeerConnection({ iceServers: [] });
      pc.createDataChannel('');
      
      // Create offer and set local description
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      
      // Wait for ICE candidate gathering
      const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;
      let ipAddress = 'Loading...';
      let foundWifiIP = false;
      
      pc.onicecandidate = (ice) => {
        if (ice.candidate) {
          const matches = ipRegex.exec(ice.candidate.candidate);
          if (matches && matches.length > 1) {
            const potentialIP = matches[1];
            
            // Only consider private network IPs
            if (this.isPrivateIP(potentialIP)) {
              // Prioritize WiFi IPs (typically 192.168.x.x for home networks)
              if (potentialIP.startsWith('192.168.')) {
                // Most likely a WiFi connection
                ipAddress = potentialIP;
                foundWifiIP = true;
                this.updateIPDisplay(ipAddress);
              } else {
                // Store other IPs as fallback
                this.potentialIPs.push(potentialIP);
              }
            }
          }
        }
        
        // If we've found a WiFi IP, we can close the connection
        if (foundWifiIP) {
          pc.close();
        }
      };
      
      // Fallback to other IPs or electron IPC if available
      setTimeout(() => {
        if (this.ipAddressElement.textContent === 'Loading...') {
          // If we didn't find a WiFi IP but have other private IPs, use the first one
          if (this.potentialIPs.length > 0) {
            const fallbackIP = this.potentialIPs[0];
            this.updateIPDisplay(fallbackIP, false);
          }
          // If no private IPs found at all, try electron IPC
          else if (window.electron) {
            // This is handled in setupElectronIPListener()
          } else {
            this.ipAddressElement.textContent = 'Could not detect WiFi IP';
          }
        }
        
        // Close the peer connection if still open
        if (pc.connectionState !== 'closed') {
          pc.close();
        }
      }, 3000); // Wait 3 seconds for WebRTC before falling back
      
    } catch (error) {
      console.error('Error finding IP address:', error);
      
      // Check if we have any potential IPs from before the error
      if (this.potentialIPs && this.potentialIPs.length > 0) {
        const fallbackIP = this.potentialIPs[0];
        this.updateIPDisplay(fallbackIP, false);
      }
      // Fallback to electron IPC
      else if (window.electron) {
        // This is handled in setupElectronIPListener()
      } else {
        this.ipAddressElement.textContent = 'Could not detect WiFi IP';
      }
    }
  }

  // Helper to check if an IP is a private network IP
  isPrivateIP(ip) {
    return ip.startsWith('192.168.') || 
           ip.startsWith('10.') || 
           (ip.startsWith('172.') && 
            parseInt(ip.split('.')[1]) >= 16 && 
            parseInt(ip.split('.')[1]) <= 31);
  }

  // Update the IP display with the detected IP
  updateIPDisplay(ipAddress, isWifi = true) {
    this.ipAddressElement.textContent = ipAddress + (isWifi ? '' : ' (Not WiFi)');
    
    // Generate QR code for the connection URL
    const connectionUrl = `http://${ipAddress}:3000`;
    this.generateQRCode(connectionUrl);
  }

  // Setup listener for IP address from Electron main process
  setupElectronIPListener() {
    if (window.electron) {
      window.electron.receive('ip-address', (ipAddress) => {
        if (this.ipAddressElement.textContent === 'Loading...' || 
            this.ipAddressElement.textContent === 'Could not detect WiFi IP' ||
            this.ipAddressElement.textContent === 'Could not detect IP') {
          // Check if it looks like a WiFi IP
          const isLikelyWifi = ipAddress.startsWith('192.168.');
          this.updateIPDisplay(ipAddress, isLikelyWifi);
        }
      });
    }
  }

  // Generate QR code for the connection URL
  generateQRCode(data) {
    // In a real app, you would use a library like qrcode.js
    // For now, we'll just show a placeholder
    this.qrCodeElement.innerHTML = `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="80" height="80" fill="white" />
        <path d="M20,20 h20 v20 h-20 z M60,20 h20 v20 h-20 z M20,60 h20 v20 h-20 z M40,40 h20 v20 h-20 z M70,50 h10 v10 h-10 z M50,70 h10 v10 h-10 z" fill="black" />
      </svg>
    `;
    this.qrCodeElement.title = data;
  }
}

export default IPDisplay;