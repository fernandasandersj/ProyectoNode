const express = require ('express');
const router = express.Router();

router.get('/', (req, res)=>{
res.render("mascotas",{
    //Array que viene de la BBDD
    arrayMascotas: [
        {id: '1', nombre: 'kitty', descripcion: 'perrita bb'},
        {id: '2', nombre: 'neus', descripcion: 'perrita bb 2'},
    ]
});
});

module.exports=router;