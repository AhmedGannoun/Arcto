import React, { useEffect } from 'react';

const WelcomePage = ({ onNext }) => {
  useEffect(() => {
    // Add entrance animation class
    const welcomeScreen = document.querySelector('.welcome-screen');
    if (welcomeScreen) {
      welcomeScreen.classList.add('animate-in');
    }
  }, []);

  const handleNext = () => {
    // Add exit animation before navigating
    const welcomeScreen = document.querySelector('.welcome-screen');
    if (welcomeScreen) {
      welcomeScreen.classList.add('animate-out');
      setTimeout(() => {
        onNext();
      }, 300); // Match this with the CSS animation duration
    } else {
      onNext();
    }
  };

  return (
    <div className="onboarding-screen welcome-screen">
      <img src="/arcto.png" alt="Arcto Logo" className="welcome-logo" />
      <h1>Welcome to Arcto Remote</h1>
      <p>Control your presentations and media from your mobile device</p>
      <button className="primary-button" onClick={handleNext}>Get Started</button>
    </div>
  );
};

export default WelcomePage;