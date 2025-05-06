import React from 'react';
import Header from '../components/Header';
import NavigationControls from '../components/NavigationControls';
import MediaSelector from '../components/MediaSelector';
import MediaControls from '../components/MediaControls';
import ThemeControl from '../components/ThemeControl';

const RemotePage = ({ 
  isConnected, 
  isPoweredOn, 
  togglePower, 
  selectedMedia, 
  setSelectedMedia, 
  isDarkMode, 
  toggleTheme 
}) => {
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
        isPoweredOn={isPoweredOn} 
        togglePower={togglePower} 
      />
      
      <div className="main-content">
        <div className="slides-section">
          <h2 className="section-title">Slides Navigation</h2>
          <NavigationControls isPoweredOn={isPoweredOn} />
        </div>
        
        <div className="media-section">
          <h2 className="section-title">Media Controls</h2>
          <MediaSelector
            isPoweredOn={isPoweredOn}
            selectedMedia={selectedMedia}
            setSelectedMedia={setSelectedMedia}
          />
          
          <MediaControls 
            disabled={!isPoweredOn || !selectedMedia}
            onClick={handlePlayMedia}
          />
        </div>
      </div>

      <div className="footer-controls">
        <ThemeControl
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
};

export default RemotePage;