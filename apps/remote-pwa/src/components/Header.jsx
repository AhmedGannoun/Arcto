import React from 'react';

const Header = ({ isConnected, isPoweredOn, togglePower }) => {
  const handleLogoClick = () => {
    // Add electricity animation when toggling power
    const logoContainer = document.querySelector('.logo-container');
    logoContainer.classList.add('power-toggle-animation');
    
    // Remove animation class after it completes
    setTimeout(() => {
      logoContainer.classList.remove('power-toggle-animation');
    }, 1000);
    
    togglePower();
  };
  
  // Determine the logo class based on power and connection state
  const logoClass = isPoweredOn 
    ? (isConnected ? 'powered-on' : 'connecting')
    : 'powered-off';
  
  return (
    <header className="header">
      <button 
        className={`logo-container ${logoClass}`}
        onClick={handleLogoClick}
        aria-label={`Power ${isPoweredOn ? 'on' : 'off'}`}
      >
        <img src="/arcto.png" alt="Arcto Logo" className="logo-image" />
      </button>
      
      <div className={`connection-status ${isPoweredOn ? '' : 'status-off'}`}>
        <div className={`status-indicator ${isConnected ? 'connected' : 'disconnected'}`}></div>
        {isConnected ? 'Connected' : 'Disconnected'}
      </div>
    </header>
  );
};

export default Header;