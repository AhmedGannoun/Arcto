import React, { useEffect } from 'react';

const IPInputPage = ({ onNext, ipAddress, setIpAddress }) => {
  useEffect(() => {
    // Add entrance animation class
    const ipScreen = document.querySelector('.ip-input-screen');
    if (ipScreen) {
      ipScreen.classList.add('animate-in');
    }
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (ipAddress.trim()) {
      // Add exit animation before navigating
      const ipScreen = document.querySelector('.ip-input-screen');
      if (ipScreen) {
        ipScreen.classList.add('animate-out');
        setTimeout(() => {
          onNext();
        }, 300); // Match this with the CSS animation duration
      } else {
        onNext();
      }
    }
  };

  return (
    <div className="onboarding-screen ip-input-screen">
      <h1>Connect to Your PC</h1>
      <p>Enter your computer's IP address to establish a connection</p>
      
      <form onSubmit={handleSubmit} className="ip-form">
        <div className="input-group">
          <label htmlFor="ip-address">PC IP Address</label>
          <input 
            type="text" 
            id="ip-address" 
            placeholder="e.g., 192.168.1.100" 
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            pattern="^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$"
            title="Please enter a valid IP address (e.g., 192.168.1.100)"
            required
          />
        </div>
        <button type="submit" className="primary-button">Connect</button>
      </form>
    </div>
  );
};

export default IPInputPage;