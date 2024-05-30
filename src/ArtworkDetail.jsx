import React from 'react';
import PropTypes from 'prop-types';
import './ArtworkDetails.css';

const ArtworkDetails = ({ artwork }) => {
  // Prop validation using PropTypes
  ArtworkDetails.propTypes = {
    artwork: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image_id: PropTypes.string.isRequired,
      date_display: PropTypes.string,
      artist_title: PropTypes.string,
      medium_display: PropTypes.string,
      dimensions: PropTypes.string,
      // Add more prop types as needed
    }).isRequired,
  };

  const { title, image_id, date_display, artist_title, medium_display, dimensions } = artwork;

  return (
    <div className="ArtworkDetails">
      <img src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`} alt={title} />
      <h2>{title}</h2>
      {artist_title && <p>Artist: {artist_title}</p>}
      {date_display && <p>Date: {date_display}</p>}
      {medium_display && <p>Medium: {medium_display}</p>}
      {dimensions && <p>Dimensions: {dimensions}</p>}
    </div>
  );
};

export default ArtworkDetails;