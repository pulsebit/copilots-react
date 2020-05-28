const express = require('express');
const cors = require('cors');
const cookie = require('cookie');
const http = require('http');
const socketIo = require('socket.io');
const fetch = require('node-fetch');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 4001;

app.use('/notifications', require('./server/routes/notification'));

const server = http.createServer(app);
const io = socketIo(server);
let interval;

io.on("connection", (socket) => {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 5000);
  socket.on("disconnect", () => {
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  fetch(`${process.env.REACT_APP_API}/api/coaches/`)
  	.then(res => res.text())
  	.then(data => socket.emit("FromAPI", data))
  	.catch(err=> console.log(err));
};

server.listen(port, () => console.log(`Listening on port ${port}`));