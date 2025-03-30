// client/src/pages/Home.js
import React, { useState, useEffect } from 'react';
import VideoList from '../components/videos/VideoList';
import { fetchVideos } from '../services/videoService';

function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadVideos = async () => {
      try {
        setLoading(true);
        const data = await fetchVideos();
        setVideos(data);
        setError(null);
      } catch (err) {
        setError('영상을 가져오는 중 오류가 발생했습니다.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadVideos();
  }, []);
  
  return (
    <div className="home-page">
      <h1>교육 영상 플랫폼</h1>
      
      {loading && <p>로딩 중...</p>}
      {error && <p className="error">{error}</p>}
      
      {!loading && !error && (
        <VideoList videos={videos} />
      )}
    </div>
  );
}

export default Home;