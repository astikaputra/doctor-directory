import Doctors from "../models/DoctorModel.js";

export const getDoctors = async(req, res) =>{
    try {
        const response = await Doctors.findAll();
        res.status(200).json(response);        
    } catch (error) {
        console.log(eror.message);        
    }
}