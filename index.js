import mongoose from "mongoose";
import express from 'express';
import todoRoutes from './Routes/routes.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json({ extended: false }));
app.use(cors());
app.use("/api/todo",todoRoutes);

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server is running on ${PORT}`)))
.catch((err) => console.log(`${err} db did not connect`))