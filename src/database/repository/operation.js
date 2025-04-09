const mongoose = require("mongoose");
const { commonSchema } = require("../models/index");
const { ResponseMessage, ResponseStatus } = require("../../Utils/index");


const checkMailExisted = async (email) => {
    try {

        const query = [];
        const verificationStore = {};

        const matchingStage = {
            $match: {
                email: email
            }
        };

        query.push(matchingStage);

        console.log("query", query)

        const checkData = await commonSchema.aggregate(query);
        console.log("checkData", checkData);

        if (checkData.length !== 0) {
            var status, message, data;

            message = await ResponseMessage("emailAlreadyExisted");
            status = await ResponseStatus("BAD_REQUEST");
            data = checkData;

            return [status, message, data];
        }

        return false;

    } catch (error) {
        console.log("error while the operation function !!", error);
    }
}

const newRecordEntry = async (formData) => {
    try {

        const instance = new commonSchema(formData);
        const data = await instance.save();

        console.log("data", data)

        if (data) { return true; }

    } catch (error) {
        console.log("error while the operation function !!", error);
        return false;
    }
}

module.exports = { checkMailExisted, newRecordEntry }

