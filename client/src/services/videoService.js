// client/src/services/videoService.js
import axios from 'axios';

// API 기본 URL 설정
const API_URL = '/api';

// 영상 목록 가져오기
export const fetchVideos = async (channelId = null) => {
  try {
    const params = channelId ? { channelId } : {};
    const response = await axios.get(`${API_URL}/videos`, { params });
    return response.data;
  } catch (error) {
    console.error('동영상 데이터를 가져오는 중 오류 발생:', error);
    throw error;
  }
};