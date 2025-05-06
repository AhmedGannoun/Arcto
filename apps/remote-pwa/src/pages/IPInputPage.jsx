import React, { useState } from 'react';

const IPInputPage = ({ onConnect }) => {
  const [ipAddress, setIpAddress] = useState('');
  const [error, setError] = useState('');

  const validateIP = (ip) => {
    // Basic IP validation regex
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipRegex.test(ip);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ipAddress) {
      setError('Please enter an IP address');
      return;
    }
    
    if (!validateIP(ipAddress)) {
      setError('Please enter a valid IP address');
      return;
    }
    
    setError('');
    onConnect(ipAddress);
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-screen animate-in">
        <h1>Connect to Your PC</h1>
        <p>Enter the IP address of your computer</p>
        
        <form className="ip-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="ip-address">IP Address</label>
            <input 
              id="ip-address"
              type="text" 
              placeholder="192.168.1.1" 
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
          </div>
          <button type="submit" className="primary-button">Connect</button>
        </form>
      </div>
    </div>
  );
};

export default IPInputPage;