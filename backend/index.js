import express from "express";
import cors from "cors";
import DoctorRoute from "./routers/DoctorRoute.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(DoctorRoute);


app.listen(5000,()=> console.log('Server Up and Running on port 5000...'));

