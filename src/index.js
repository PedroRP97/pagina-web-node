const express = require('express');
const app = express(); //app es el servidor
const dir = require('path');


//configuracion del servidor
app.set('port', 4000); //app nos da acceso a la variable port de forma global
app.set('views', dir.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); //indicamos el motor de plantilla a utilizar


//middlewares

//rutas del servidor
app.use(require('./routes/index'));

//archivos estaticos
app.use(express.static(dir.join(__dirname, 'public'))); //publica la carpeta public desde el navegador haciendolo publico

//servidor escuchando
app.listen(app.get('port'), ()=>{
    console.log("listening on port", app.get('port'));
});