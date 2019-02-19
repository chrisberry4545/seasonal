const express = require('express');
const helmet = require('helmet');
const cors = require('./middleware/cors');

const seasonApi = require('./api/season-api');

const app = express();

app.use(cors);
app.use(helmet());

app.use(`/${process.env.SEASON_DATA_ENDPOINT}`, seasonApi());

module.exports = app;
