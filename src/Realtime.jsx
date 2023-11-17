import React, { useState, useEffect } from 'react';

const LocationByGPS = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
          },
          (err) => {
            setError(`Geolocation error: ${err.message}`);
          }
        );
      } else {
        setError('Geolocation is not supported by your browser');
      }
    };

    fetchLocation();
  }, []);

  return (
    <div>
      {location ? (
        <div>
          <h3>Location Information</h3>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : (
        <p>Loading location information...</p>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LocationByGPS;
