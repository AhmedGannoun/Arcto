import React from 'react';

const NavigationControls = ({ isPoweredOn }) => {
  return (
    <div className="navigation-controls">
      <button
        className="nav-button"
        disabled={!isPoweredOn}
        onClick={() => console.log('Previous slide')}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button
        className="nav-button"
        disabled={!isPoweredOn}
        onClick={() => console.log('Next slide')}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default NavigationControls;