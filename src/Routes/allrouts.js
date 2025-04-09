const express = require("express");
const {middlewareForValidation} = require("../Middleware/allmiddleware");
const { validationResult } = require("express-validator");
const {checkMailExisted} = require("../database/repository/operation");


module.exports = (app) => {
    app.post("/",(req,res)=>{
        res.status(200).json({message:"Hello from application !!"})
    });

    app.post("/registration",middlewareForValidation,async (req,res)=>{
        try{
            const formdata = req.body;

            const errors = await validationResult(req);

            if(!errors.isEmpty()){
                res.status(400).json({message:errors.array()})
            }

            const isEmailExisit = await checkMailExisted(formdata.email);

            const [status,message,data] = isEmailExisit;

            res.json({status:status,message:message,data:data})
            
        }catch(error){
            console.log("error while registration , heres a error ===>>",error);
            res.status(400).json({message:"error in registration !",error:error})
        }
    })
}