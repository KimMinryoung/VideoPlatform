// client/src/components/videos/VideoList.js
import React from 'react';
import VideoCard from './VideoCard';

function VideoList({ videos }) {
  if (videos.length === 0) {
    return <p>표시할 영상이 없습니다.</p>;
  }

  return (
    <div className="video-grid">
      {videos.map(video => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </div>
  );
}

export default VideoList;