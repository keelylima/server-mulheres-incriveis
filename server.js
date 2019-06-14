const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const controller = require('./MulheresController');

const server = express();
server.use(cors());
server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.send(controller.getAll());
})