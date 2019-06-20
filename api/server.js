const express = require('express');

const donationsRouter = require('../donations/donationsRouter.js')

const server = express();

server.use(express.json());

server.use('/api/donations', donationsRouter)

server.get('/', (req, res) => {
  res.status(200).json({ api: 'api is working' });
});


module.exports = server;