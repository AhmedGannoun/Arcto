import { useState, useEffect } from 'react';
import './App.css';

// Import pages
import WelcomePage from './pages/WelcomePage';
import IPInputPage from './pages/IPInputPage';
import RemotePage from './pages/RemotePage';

// Import hooks
import useTheme from './hooks/useTheme';

export default function App() {
  // Onboarding state
  const [currentStep, setCurrentStep] = useState(0); // 0: Welcome, 1: IP Input, 2: Remote
  const [ipAddress, setIpAddress] = useState('');
  
  // Remote state
  const [isConnected, setIsConnected] = useState(false);
  const [isPoweredOn, setIsPoweredOn] = useState(true);
  const [selectedMedia, setSelectedMedia] = useState('');
  const { isDarkMode, toggleTheme } = useTheme();

  // Handle connection status
  useEffect(() => {
    if (currentStep === 2 && isPoweredOn) {
      const timeout = setTimeout(() => setIsConnected(true), 2000);
      return () => clearTimeout(timeout);
    }
    setIsConnected(false);
  }, [isPoweredOn, currentStep]);

  // Render the appropriate screen based on current step
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <WelcomePage onNext={() => setCurrentStep(1)} />;
      case 1:
        return (
          <IPInputPage 
            onConnect={() => setCurrentStep(2)} 
            ipAddress={ipAddress} 
            setIpAddress={setIpAddress} 
          />
        );
      case 2:
        return (
          <RemotePage 
            isConnected={isConnected}
            isPoweredOn={isPoweredOn}
            togglePower={() => setIsPoweredOn(!isPoweredOn)}
            selectedMedia={selectedMedia}
            setSelectedMedia={setSelectedMedia}
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
          />
        );
      default:
        return <WelcomePage onNext={() => setCurrentStep(1)} />;
    }
  };

  return (
    <div className="app-container">
      {renderCurrentStep()}
    </div>
  );
}
