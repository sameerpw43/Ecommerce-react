import express from "express";
import morgan from "morgan";
import connectDB from "./db.js";
import authRoutes from './routes/authRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';
import path from 'path';
import {fileURLToPath} from 'url';

// database config
connectDB();
//es module fix
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(_dirname,'./client/build')));
// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// rest api
app.use('*',function(req,res) {
  res.sendFile(path.join(_dirname,'./build/index.html'));
})
const PORT = process.env.port || 8080;
//serving the front end 

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
