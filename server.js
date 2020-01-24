const express = require('express');
const CORS = require('cors');

const Ingredients = require('./data/conversions-db-queries');

const server = express();

server.use(express.json());
server.use(CORS());

console.log("Server be runnin' boss");

server.get('/api/conversions', async (req, res) => {
  try {
    const conversions = await Ingredients.get();
    console.log(conversions);
    res.status(200).json(conversions);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = server;
