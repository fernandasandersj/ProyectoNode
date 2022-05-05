const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{

    res.render("index",{titulo: "mi titulo dinamico"});
});

router.get('/Servicios', (req,res)=>{

    res.render("servicios", {tituloServicios: "Este es un mensaje dinámico"});

});


module.exports=router;
