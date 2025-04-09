const mongoose = require("mongoose");
require('dotenv').config();

const connectionFun = async () => {
    try{

        const DB_URL = process.env.DB_URL;
        console.log("DB_URL",DB_URL)

        const connecting = await mongoose.connect(DB_URL);
        return true;
    }catch(error){
        console.log("error while connecting the database , the error is ==>>",error)
    }
}

module.exports = {connectionFun}