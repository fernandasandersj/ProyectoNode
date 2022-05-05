const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema= new Schema({
nombre: String,
descripcion: String,

});

//Crear modelo

const MascotaConst = mongoose.model('MascotaConst', mascotaSchema, 'Mascotas');


module.exports = MascotaConst;