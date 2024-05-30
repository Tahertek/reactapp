import React from 'react';
import ArtworkCard from './ArtworkCard';
import './ArtworkList.css';

const ArtworkList = ({ artworks }) => {
  return (
    <div className="ArtworkList">
      {artworks.map((artwork, index) => (
        <ArtworkCard key={artwork.id} artwork={artwork} delay={index * 0.2} />
      ))}
    </div>
  );
};

export default ArtworkList;