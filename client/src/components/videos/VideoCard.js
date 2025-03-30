// client/src/components/videos/VideoCard.js
import React from 'react';

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <img 
        src={video.snippet.thumbnails.medium.url} 
        alt={video.snippet.title} 
      />
      <h3>{video.snippet.title}</h3>
      <p>{video.snippet.description}</p>
    </div>
  );
}

export default VideoCard;