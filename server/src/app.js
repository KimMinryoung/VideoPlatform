// server/src/app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우트 임포트
const videoRoutes = require('./routes/videoRoutes');

// 라우트 설정
app.use('/api/videos', videoRoutes);

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});

module.exports = app;