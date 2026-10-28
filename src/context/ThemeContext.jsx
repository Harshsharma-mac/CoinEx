import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('coinex_theme');
      if (savedTheme !== null) {
        return savedTheme === 'dark';
      }
    } catch {
      // LocalStorage access may fail in restricted environments
    }
    return document.body.classList.contains('dark-mode');
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      try {
        localStorage.setItem('coinex_theme', 'dark');
      } catch {
        // Ignore
      }
    } else {
      document.body.classList.remove('dark-mode');
      try {
        localStorage.setItem('coinex_theme', 'light');
      } catch {
        // Ignore
      }
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
