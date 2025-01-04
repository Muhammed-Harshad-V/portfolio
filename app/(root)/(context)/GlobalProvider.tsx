'use client';
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Define the shape of the context
interface GlobalContextType {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

// Create the context
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Provider Props
interface GlobalProviderProps {
  children: ReactNode;
}

// GlobalProvider Component
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Simulate loading for 5 seconds once the user enters
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  const globalState: GlobalContextType = {
    isLoading,
    startLoading,
    stopLoading,
  };

  return (
    <GlobalContext.Provider value={globalState}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom Hook for easy access
export const useGlobal = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};
