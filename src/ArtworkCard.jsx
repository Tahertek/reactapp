import React from 'react';
import PropTypes from 'prop-types';
import './ArtworkCard.css';

const ArtworkCard = ({ artwork, delay }) => {
  // Prop validation using PropTypes
  ArtworkCard.propTypes = {
    artwork: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.shape({
        lqip: PropTypes.string.isRequired,
      }).isRequired,
      date_display: PropTypes.string,
      artist_title: PropTypes.string,
      // Add more prop types as needed
    }).isRequired,
    delay: PropTypes.number, // Optional delay prop
  };

  const { title, thumbnail, date_display, artist_title } = artwork;

  return (
    <div className="ArtworkCard" style={{ animationDelay: `${delay}s` }}>
      <img src={thumbnail.lqip} alt={title} />
      <h3>{title}</h3>
      {artist_title && <p>Artist: {artist_title}</p>}
      {date_display && <p>Date: {date_display}</p>}
    </div>
  );
};

export default ArtworkCard;   