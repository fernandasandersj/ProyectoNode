const express = require ('express');
const router = express.Router();

const MascotaConst = require('../models/modeloMascota');

router.get('/', async (req, res)=>{

    try{

        const arrayMascotasDB = await MascotaConst.find();

        console.log(arrayMascotasDB)
    } catch(error){
        console.log(error);
    }

res.render("Mascotas",{
    //Array que viene de la BBDD 
    arrayMascotas: [
        {id: '1', nombre: 'kitty', descripcion: 'perrita bb'},
        {id: '2', nombre: 'neus', descripcion: 'perrita bb 2'},
    ]
    });
});

module.exports=router;