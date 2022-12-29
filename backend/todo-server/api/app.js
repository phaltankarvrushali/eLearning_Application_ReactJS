import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/index.js";
import model from "./models/index.js";


const app = express();

//Connect to todoDb
mongoose.connect('mongodb://localhost:27017/todoDB');

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

routes(app);

export default app;