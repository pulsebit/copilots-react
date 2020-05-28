const express = require("express");
const router = express.Router();
const http = require('http');
const socketIo = require('socket.io');
const fetch = require('node-fetch');
const app = express();

router.get("/", (req, res) => {
	res.json('Notification');
});

module.exports = router;