import React, { useEffect, useState } from 'react';

const AlertTriggered = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to trigger the alert display
  const triggerAlert = () => {
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  useEffect(() => {
    triggerAlert();
  }, []);

  return (
    <>
      {isVisible && (
        <div className='alert-message'>
          Alert Triggered!
        </div>
      )}
    </>
  );
};

export default AlertTriggered;
