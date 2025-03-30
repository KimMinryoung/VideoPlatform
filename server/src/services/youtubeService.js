// server/src/services/videoService.js
const { google } = require('googleapis');

// 환경 변수에서 API 키 가져오기
const API_KEY = process.env.YOUTUBE_API_KEY;

const youtube = google.youtube({
  version: 'v3',
  auth: API_KEY
});

// 채널 영상 목록 가져오기
const getChannelVideos = async (channelId, maxResults = 10) => {
  try {
    const response = await youtube.search.list({
      part: 'snippet',
      channelId: channelId,
      maxResults: maxResults,
      order: 'date'
    });
    
    return response.data.items;
  } catch (error) {
    throw new Error(`YouTube API 오류: ${error.message}`);
  }
};

module.exports = {
  getChannelVideos
};