var express = require("express");
var bodyParser = require('body-parser');
const bcryptjs = require('bcryptjs');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "jade");

app.get("/", function(req, res){
	res.render("login");
})

app.post("/users", async function(req, res){
	const usuario = req.body.email;
	const contrasena = req.body.password;

	if(usuario == 'carlos@hotmail.com' && contrasena == 'char'){
		let passwordHash = await bcryptjs.hash(contrasena, 8);
		console.log("Email: " + usuario)
 		console.log("Contraseña: " + passwordHash)
 		res.send('Autenticación exitosa');
	} else {
		res.send('Autenticación fallida');
	}
});

app.listen(8080);

/*

Programa de ExpressJS del lado del servidor con javascript que por medio de la libreria "bcryptjs" encripta el valor de "password" direccionado al servidor con la petición HTTP - POST por medio de un formulario JADE.

NOTA: Instalar el siguiente paquete: npm install express bcryptjs

*/