const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MulheresSchema = new Schema({
    _id: {type: mongoose.Schema.Types.Object, auto: true},
    nome: {type: String, required: true},
    profissao: {type: String, required: true},
    descricao: {type: String, required: true},
    perfil: {type: String, required: true},
    img_art_01: {type: String, required: true},
    img_art_02: {type: String, required: true},
    img_art_03: {type: String, required: true}
})