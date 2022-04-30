
//Se llama al modulo con la info necesaria 

const {frutas, dinero}=require('./frutas');

frutas.forEach(item=>{

    console.log(item);

});


//SERVIDOR

//const http=require('http');
//const server=http.createServer((req, res)=>{

  //  res.end('estoy respondiendo a tu solicitud v4');

//});

//const puerto = 3000;
//server.listen(puerto, () =>{

  //  console.log('escuchando solicitudes');

//});

//SERVIDOR EXPRESS

const express = require('express')
const app = express()

const puerto = process.env.PORT || 3000;

// CONEXION CON LA BBDD 

const mongoose = require('mongoose');


const user = '';
const password = '';
const uri = '';

mongoose.connect('uri');

.then(() => console.log('Base de datos conectada'));
.catch(e => console.log(e));

//Motor de plantillas con Express y EJS

app.set('view engine', 'ejs');

app.set('views',__dirname + '/views');

//Conexion con la web estatica donde se encontrará el css y el js. si se usa USE es un middelword

app.use(express.static(__dirname +  "/public"));

//Rutas Web
app.use('/', require('./router/rutasWeb'));
app.use('/mascotas',require('./router/mascotas'));



app.listen(puerto, ()=>{

    console.log ('escuchando el servidor',puerto);

});