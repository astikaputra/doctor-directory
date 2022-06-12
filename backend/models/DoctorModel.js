import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Doctors = db.define ('doctors',{
    name: DataTypes.STRING,
    speciality: DataTypes.STRING,
    status: DataTypes.BOOLEAN    
},{
    freezeTableName:true
});

export default Doctors;

(async()=>{
    await db.sync();
})();