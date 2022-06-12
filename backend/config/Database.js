import {Sequelize} from "sequelize";

const db = new Sequelize('db_doctor-dir','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
