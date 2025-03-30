// server/src/controllers/videoController.js
const youtubeService = require('../services/youtubeService');

// 영상 목록 가져오기
const getVideos = async (req, res) => {
  try {
    const channelId = req.query.channelId || process.env.DEFAULT_CHANNEL_ID;
    const videos = await youtubeService.getChannelVideos(channelId);
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getVideos
};