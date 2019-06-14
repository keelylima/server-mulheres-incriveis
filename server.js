const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const controller = require('./MulheresController');

const server = express();
server.use(cors());
server.use(bodyParser.json());

server.get('/', async (req, res) => {
        controller.getAll()
        .then((listaDeMulheres) => res.send(listaDeMulheres));
})

server.listen(3000)
console.log('ta rodando na porta 3000 irmão')