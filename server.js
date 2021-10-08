//hacer el import express
//const express = require('express');


//hacer el nuevo tipo de import
import Express from 'express';
import Cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db/db.js';
import { MongoClient, ObjectId } from 'mongodb';
import rutasProducto from './views/productos/rutas.js';

dotenv.config({path: './.env'});


const app = Express();

app.use(Express.json());
app.use(Cors());
app.use(rutasProducto);



const main = ()=>{

  return app.listen(process.env.PORT, ()=>{

    console.log(`escuchando puerto ${process.env.PORT}`);

  }); 

};

connectDB(main);