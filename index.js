import cors from 'cors';
import express from "express";
import morgan from "morgan";
import ENV from "./ENV.js";
import db from "./src/config/db/db.js";
import router from "./src/routers/index.js";
const app=express()

app.use(morgan('combined'))


// const allowedOrigins = ['http://localhost:3006/'];
db.connect()
app.use(cors());
router(app)
// collectionController.removeAll()
app.listen(ENV.PORT, ()=>console.log('run'))