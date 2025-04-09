const express = require("express");
require("dotenv").config();
const {connectionFun} = require("./src/database/connection");
const routes = require("./src/Routes/allrouts");
const bodyParser = require("body-parser");

const port = process.env.Port || 3000;

console.log("port is ",port);

const app = express();
app.use(bodyParser.json());
connectionFun();
console.log("Database is connected successfully !!");

routes(app);

app.listen(port,()=>{
    console.log("Server is running on port on ,",port)
})