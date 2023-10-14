import React, { createContext, useState, useContext, ReactNode } from "react";

interface XLoadingContextProps {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

const XLoadingContext = createContext<XLoadingContextProps | undefined>(
  undefined
);

export const XLoadingProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return (
    <XLoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </XLoadingContext.Provider>
  );
};

export const useXLoading = (): XLoadingContextProps => {
  const context = useContext(XLoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
