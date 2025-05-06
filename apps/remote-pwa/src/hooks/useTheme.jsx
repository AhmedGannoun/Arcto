import { useState, useEffect } from 'react';

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on user preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', !isDarkMode ? 'dark' : 'light');
    // Add a subtle animation to the body when theme changes
    document.body.style.transition = 'background-color 0.5s ease';
    // Keep the logo background color consistent
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
      logoContainer.style.backgroundColor = '#1f2937';
    }
  };

  return { isDarkMode, toggleTheme };
};

export default useTheme;