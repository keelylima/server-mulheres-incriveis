const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MulheresSchema = new Schema({
    _id: {type: mongoose.Schema.Types.Object, auto: true},
    nome: {type: String, required: true}, 
    profissao: {type: String, }, //não esquecer de colocar require em todos
    descricao: {type: String, },
    perfil: {type: String, },
    img_art_01: {type: String, },
    img_art_02: {type: String, },
    img_art_03: {type: String, }
})

const mulheresModel = mongoose.model('mulheres-incriveis', MulheresSchema);

module.exports = { mulheresModel };