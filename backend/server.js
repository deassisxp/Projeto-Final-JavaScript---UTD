const express = require('express');
const app = express();
const db = require('./app/config/db.config.js');
const Cliente = db.Cliente;

let router = require('./app/routes/routes.js');
const cors = require('cors')
const corsOptions = {
 origin:['http://localhost:3306/', 'http://localhost:5173','http://localhost:8080'],
 optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('resources'));
app.use('/', router);
const server = app.listen(8080, function () {
 let host = server.address().address
 let port = server.address().port
 console.log("App está rodando no endereço http://%s:%s", host, port); 
});
db.sequelize.sync({force: true}).then(() => {
 console.log('Apaga e recria a tabela usando { force: true }');
 Cliente.sync().then(() => {
 const clientes = [
 { nome: 'Pedro', idade: 23, email: 'pedro@email.com' },
 { nome: 'Sara' , idade: 31 , email: 'sara@email.com'},
 { nome: 'Emilly', idade: 18 , email: 'emilly@email.com'},
 ]
 
 clientes.forEach(cliente =>Cliente.create(cliente));
})
});