import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
// import { Server } from 'socket.io';

import netflixRoute from './routes/netflix.routes.js';

// import { rooms } from './socket/rooms.js';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
const __dirname = path.resolve();

app.use(express.json()); // to parse the incoming reuests with JSON payloads (from req.body)
app.use(cookieParser());

app.use('/api/netflix', netflixRoute);

app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

// const expressServer = app.listen(PORT, () => {
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// const io = new Server(expressServer, {
//   cors: {
//     origin:
//       process.env.NODE_ENV === 'production' ? false : ['http://localhost:3000'],
//   },
// });

// export const roomConnection = io.of('/rooms');
// rooms();
