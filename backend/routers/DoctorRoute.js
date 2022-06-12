import express from "express";
import {getDoctors} from "../controller/DoctorController.js"

const router = express.Router();

router.get('/Doctors', getDoctors);

export default router;