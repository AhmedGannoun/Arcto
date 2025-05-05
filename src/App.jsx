import { useState, useEffect } from 'react';
import './App.css';

const Header = ({ isConnected, deviceName = 'Living Room TV', toggleTheme, isDarkMode }) => (
  <header className="header">
    <div className="logo-container">
      <div className="logo">A</div>
      <span className="logo-text">Arcto</span>
    </div>
    <div className="header-title">
      <h1>MediaControl</h1>
      <div className="connection-status">
        <div className={`status-indicator ${isConnected ? 'connected' : 'disconnected'}`} />
        <span>{isConnected ? `Connected to: ${deviceName}` : 'Disconnected'}</span>
      </div>
    </div>
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )}
    </button>
  </header>
);

const MediaSelector = ({ disabled, selectedMedia, setSelectedMedia }) => (
  <div className="media-control">
    <label htmlFor="media-select" className="media-label">Select Media</label>
    <select
      id="media-select"
      className="media-select"
      disabled={disabled}
      value={selectedMedia}
      onChange={(e) => setSelectedMedia(e.target.value)}
    >
      <option value="" disabled>Choose a media file</option>
      <option value="presentation1">Quarterly Report Presentation</option>
      <option value="video1">Product Demo Video</option>
      <option value="slideshow1">Marketing Slideshow</option>
      <option value="training">Employee Training Video</option>
      <option value="pitch">Investor Pitch Deck</option>
    </select>
  </div>
);

const MediaControls = ({ disabled, onClick }) => (
  <div className="media-controls-container">
    <div className="media-buttons">
      <button
        className="media-control-button"
        disabled={disabled}
        onClick={() => console.log('Rewind')}
        aria-label="Rewind"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 19 2 12 11 5 11 19"></polygon>
          <polygon points="22 19 13 12 22 5 22 19"></polygon>
        </svg>
      </button>
      
      <button
        className="play-button"
        disabled={disabled}
        onClick={onClick}
        aria-label="Play media"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
      
      <button
        className="media-control-button"
        disabled={disabled}
        onClick={() => console.log('Forward')}
        aria-label="Forward"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 19 22 12 13 5 13 19"></polygon>
          <polygon points="2 19 11 12 2 5 2 19"></polygon>
        </svg>
      </button>
    </div>
    
    <div className="media-extra-controls">
      <button
        className="media-control-button"
        disabled={disabled}
        onClick={() => console.log('Volume')}
        aria-label="Volume"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
        </svg>
      </button>
      
      <button
        className="media-control-button"
        disabled={disabled}
        onClick={() => console.log('Fullscreen')}
        aria-label="Fullscreen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
        </svg>
      </button>
    </div>
  </div>
);

const NavigationControls = ({ disabled }) => (
  <div className="navigation-controls">
    <button
      className="nav-button"
      disabled={disabled}
      onClick={() => console.log('Previous slide')}
      aria-label="Previous slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    <button
      className="nav-button"
      disabled={disabled}
      onClick={() => console.log('Next slide')}
      aria-label="Next slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  </div>
);

const PowerControl = ({ isOn, togglePower }) => (
  <div className="power-control">
    <button
      className={`power-switch ${isOn ? 'on' : ''}`}
      onClick={togglePower}
      aria-label={`Power ${isOn ? 'on' : 'off'}`}
    >
      <span className="sr-only">{isOn ? 'Power On' : 'Power Off'}</span>
    </button>
  </div>
);

export default function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [isPoweredOn, setIsPoweredOn] = useState(true);
  const [selectedMedia, setSelectedMedia] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on user preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }, []);

  // Handle connection status
  useEffect(() => {
    if (isPoweredOn) {
      const timeout = setTimeout(() => setIsConnected(true), 2000);
      return () => clearTimeout(timeout);
    }
    setIsConnected(false);
  }, [isPoweredOn]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', !isDarkMode ? 'dark' : 'light');
    // Add a subtle animation to the body when theme changes
    document.body.style.transition = 'background-color 0.5s ease';
  };

  const handlePlayMedia = () => {
    if (!isPoweredOn || !selectedMedia) return;
    console.log(`Playing: ${selectedMedia}`);
    
    // Add visual feedback for play button
    const playButton = document.querySelector('.play-button');
    playButton.classList.add('playing');
    setTimeout(() => playButton.classList.remove('playing'), 800);
  };

  return (
    <div className="remote-container">
      <Header 
        isConnected={isConnected} 
        toggleTheme={toggleTheme} 
        isDarkMode={isDarkMode} 
      />
      
      <div className="main-content">
        <div className="slides-section">
          <h2 className="section-title">Slides Navigation</h2>
          <NavigationControls disabled={!isPoweredOn} />
        </div>
        
        <div className="media-section">
          <h2 className="section-title">Media Controls</h2>
          <MediaSelector
            disabled={!isPoweredOn}
            selectedMedia={selectedMedia}
            setSelectedMedia={setSelectedMedia}
          />
          
          <MediaControls 
            disabled={!isPoweredOn || !selectedMedia}
            onClick={handlePlayMedia}
          />
        </div>
      </div>

      <PowerControl
        isOn={isPoweredOn}
        togglePower={() => setIsPoweredOn(!isPoweredOn)}
      />
    </div>
  );
}
