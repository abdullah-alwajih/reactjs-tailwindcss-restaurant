import React, { useState, useEffect } from 'react';

const Roll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`flex  transform ${isVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-1000`}
    >
      {children}
    </div>
  );
};

export default Roll;
