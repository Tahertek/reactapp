import React, { useState, useEffect } from 'react';
import ArtworkList from './ArtworkList';
import ArtworkDetails from './ArtworkDetails';
import './App.css';

function App() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch('https://api.artic.edu/api/v1/artworks');
        const data = await response.json();
        setArtworks(data.data);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching artworks:', error);
        setError('Error fetching artworks. Please try again later.');
        setLoading(false);
      }
    };
    fetchArtworks();
  }, []);

  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Art Institute of Chicago</h1>
        <div className="header-bar"></div>
      </header>
      <main>
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <p>{error}</p>
          </div>
        ) : selectedArtwork ? (
          <ArtworkDetails artwork={selectedArtwork} />
        ) : (
          <ArtworkList artworks={artworks} onArtworkClick={handleArtworkClick} />
        )}
      </main>
    </div>
  );
}

export default App;