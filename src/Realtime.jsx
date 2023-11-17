import React, { useState, useEffect } from 'react';

const RealTimeLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [changeCount, setChangeCount] = useState(0);

  useEffect(() => {
    const watchLocation = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setChangeCount((prevCount) => prevCount + 1);
      },
      (error) => {
        console.error('Error getting geolocation:', error.message);
        setError('Error getting geolocation. Please check your browser settings.');
      }
    );

    // Cleanup the watcher when the component unmounts
    return () => navigator.geolocation.clearWatch(watchLocation);
  }, []); // The empty dependency array ensures the effect runs only once

  return (
    <div>
      <h1>Real-Time Location</h1>
      {location ? (
        <>
          <p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>
          <p>Coordinate Changes: {changeCount}</p>
        </>
      ) : (
        <p>Loading location...</p>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default RealTimeLocation;
