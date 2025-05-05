import React from 'react';

const WelcomePage = ({ onNext }) => {
  return (
    <div className="onboarding-container">
      <div className="onboarding-screen animate-in">
        <img src="/arcto.png" alt="Arcto Logo" className="welcome-logo" />
        <h1>Welcome to Arcto</h1>
        <p>Your modern remote control for presentations and media</p>
        <button className="primary-button" onClick={onNext}>Get Started</button>
      </div>
    </div>
  );
};

export default WelcomePage;