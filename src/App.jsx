import { useState, useEffect } from 'react';
import './App.css';

const Header = ({ isConnected, toggleTheme, isDarkMode }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/arcto.png" alt="Arcto Logo" className="logo-image" />
      </div>
      
      <div className="connection-status">
        <div className={`status-indicator ${isConnected ? 'connected' : 'disconnected'}`}></div>
        {isConnected ? 'Connected' : 'Disconnected'}
      </div>
      
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    </header>
  );
};

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
    // Keep the logo background color consistent
    document.querySelector('.logo-container').style.backgroundColor = '#1f2937';
  };

  const handlePlayMedia = () => {
    if (!isPoweredOn || !selectedMedia) return;
    console.log(`Playing: ${selectedMedia}`);
    
    // Add visual feedback for play button
    const playButton = document.querySelector('.play-button');
    playButton.classList.add('playing');
    setTimeout(() => playButton.classList.remove('playing'), 800);
    
    // Add ripple effect to the button
    const ripple = document.createElement('span');
    ripple.classList.add('ripple-effect');
    playButton.appendChild(ripple);
    
    // Remove the ripple after animation completes
    setTimeout(() => {
      ripple.remove();
    }, 1000);
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
