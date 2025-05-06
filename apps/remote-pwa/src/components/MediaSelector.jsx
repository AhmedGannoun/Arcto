import React from 'react';

const MediaSelector = ({ selectedMedia, setSelectedMedia, isPoweredOn }) => {
  return (
    <div className="media-control">
      <label htmlFor="media-select" className="media-label">Select Media</label>
      <select
        id="media-select"
        className="media-select"
        disabled={isPoweredOn ? false : true}
        value={selectedMedia}
        onChange={(e) => setSelectedMedia(e.target.value)}
      >
        <option value="" disabled>Choose a media file</option>
        <option value="presentation1">Quarterly Report Presentation</option>
        <option value="video1">Product Demo Video</option>
        <option value="slideshow1">Marketing Slideshow</option>
        <option value="training">Employee Training Video</option>
        <option value="pitch">Investor Pitch Deck</option>
      </select>
    </div>
  );
};

export default MediaSelector;