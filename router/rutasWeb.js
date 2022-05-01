const express = require('express');
const router = express.Router();

router.post('/', (req, res) =>{

    res.render("index",{titulo: "mi titulo dinamico"});
});

router.post('/servicios', (req,res)=>{
res.render("servicios", {tituloServicios: "Este es un mensaje dinámico"});

});


module.exports=router;
