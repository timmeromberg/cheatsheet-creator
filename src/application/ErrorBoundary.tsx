import React, { useState, useEffect, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const errorHandler = (
      event: Event | PromiseRejectionEvent,
      source?: string,
      lineno?: number,
      colno?: number,
      error?: Error
    ) => {
      setHasError(true);
      // You can log the error to an error reporting service here
      console.error(event);
      console.error(error);
      console.error(lineno);
      console.error(source);
      console.error(colno);
    };

    window.addEventListener("error", errorHandler);
    window.addEventListener("unhandledrejection", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
      window.removeEventListener("unhandledrejection", errorHandler);
    };
  }, []);

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
