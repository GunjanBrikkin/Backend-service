const mongoose = require("mongoose");
const {commonSchema} = require("../models/index");
const {ResponseMessage,ResponseStatus} = require("../../Utils/index")

const checkMailExisted = async (email) => {
    try{

        const query = [];

        const matchingStage = {
            $match:{
                email:email
            }
        };

        query.push(matchingStage);

        console.log("query",query)

    const checkData = await commonSchema.aggregate(query);
    console.log("checkData",checkData);

     if(checkData.length === 0){
        var status , message , data;

        message = await ResponseMessage("emailAlreadyExisted");
        status = await ResponseStatus("BAD_REQUEST");
        data = [];

        return [status,message,data];
     }

        
    }catch(error){
        console.log("error while the operation function !!",error);
    }
}

module.exports= {checkMailExisted}