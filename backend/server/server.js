import express from "express";
import mongoose from "mongoose";
import courseRouter from "./routes/course-routes.js";
import router from "./routes/user-routes.js";
import cors from 'cors'

const app = express();

const db =
  "mongodb://localhost:27017/userDB";



app.use(express.json());
// app.use(cors());


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use("/api/user", router);
app.use("/api/course", courseRouter);

// router(app)

mongoose
  .connect(db)
  .then(() => app.listen(5010))
  .then(() =>
    console.log("connected to database")
  )
  .catch((err) => console.log(err));