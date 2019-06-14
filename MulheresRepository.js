const mongoose = require('mongoose');

const MONGO_URL = "mongodb://localhost:27017/mulheres";

function connect() {
    mongoose.connect(MONGO_URL, {useNewUrlParser: true}, function(error) {
        if(error) {
            console.error('Sem tempo irmão: ', error);
        } else {
            console.log('TA FUNCIONANDO IRMÃO');
        }
    });
}

module.exports = { connect }