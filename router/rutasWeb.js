const express = require('express');
const router = express.Router();

router.get('/01_Fundamentos/index', (req, res) =>{

    res.render("index",{titulo: "mi titulo dinamico"});
});

router.get('/01_Fundamentos/servicios', (req,res)=>{

    res.render("servicios", {tituloServicios: "Este es un mensaje dinámico"});

});


module.exports=router;
