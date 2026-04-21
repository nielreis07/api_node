import express from 'express';
import connectDataBase from './config/dbConnect.js';

const db = connectDataBase();
db.then(function () {
    console.log('Conectado!');
}).catch(function (err) {
    console.log('Não conectado')
});

const app = express();
const port = 3000;

app.use(express.json());

