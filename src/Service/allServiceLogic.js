const nodemailer = require("nodemailer");
require("dotenv").config();
const { ResponseStatus, ResponseMessage } = require("../Utils/index");
const redisClient = require("../Config/redis");
const { newRecordEntry } = require("../database/repository/operation");
const localStorage = require("../Utils/localstorage");
const { checkMailExisted } = require("../database/repository/operation");

const generateVarificationCode = () => {
    try {

        const code = Math.floor(100000 + Math.random() * 900000).toString();
        console.log("code ==>", code)
        return code;

    } catch (error) {
        console.log("error while generating the varification code ===>>>", error);
        return false;
    }
}

const handleTheBusinessLogic = async (formdata) => {
    try {

        const email = formdata.email;

        const verificationCode = generateVarificationCode();


        if (formdata.role_code === "101") // means it is customer
        {
            formdata.role_name = "Customer"
            console.log("new formdata", formdata)
        }
        else {   // means it is Admin
            formdata.role_name = "Admin"
        }


        await redisClient.setEx(email, 300, verificationCode);

        await localStorage.setItem(email, JSON.stringify(formdata));

        console.log("redisClient", redisClient)

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.user,
                pass: process.env.pass
            }
        }); newRecordEntry

        const mailOption = {
            from: process.env.from,
            to: email,
            subject: "One time verification code :)",
            text: `Hello ${formdata.first_name} ,
            
            your one time verification code is ${verificationCode}

            NOTE : only valid for 5 min only !!
            
            `
        }

        await transporter.sendMail(mailOption);

        const message = await ResponseMessage("sended");
        const status = await ResponseStatus("OK");
        const data = [];

        return [status, message, data];

    } catch (error) {
        console.log("error while working in business logic ====>>", error);
        return false;
    }
}

const verifyCode = async (code, mail) => {
    try {

        const isAlready = await checkMailExisted(mail);

        console.log("isAlready", isAlready)

        if (isAlready !== false) {
            const data = [];
            const message = await ResponseMessage("alreadyVerifed");
            const status = await ResponseStatus("OK");
            return [status, message, data];
        }

        var formData = JSON.parse(localStorage.getItem(mail));

        console.log("formData formData", formData)

        if (formData == null) {  // means front developer pass diffrent email value
            const data = [];
            const message = await ResponseMessage("invalidEmail");
            const status = await ResponseStatus("BAD_REQUEST");
            return [status, message, data];
        }

        const storedCode = await redisClient.get(mail);

        console.log("storedCode", storedCode);


        if (storedCode == code) {



            console.log("formData", formData);
            console.log("mail====>>>", mail);
            console.log("formData.email", formData.email)

            await newRecordEntry(formData);

            const data = [];
            const message = await ResponseMessage("verifedSuccessfully");
            const status = await ResponseMessage("OK");

            return [status, message, data];
        }
        else {
            const data = []
            const message = await ResponseMessage("invalidCode");
            const status = await ResponseMessage("BAD_REQUEST");

            return [status, message, data]

        }



    } catch (error) {
        console.log("error while checking the verifycode  ====>>", error);
        return false;
    }


}

const logging = async (email, password) => {
    try {

        const getData = await checkMailExisted(email);

        console.log('getData', getData)

        const role = await getData[2][0].role_code;
        const storedEmail = await getData[2][0].email;
        const storedPassword = await getData[2][0].password;

        if (role == 102) // if the role code is 102 means it is admin , then and then we provide to login 
        {

            if (email == storedEmail && password == storedPassword) {

                const data = getData[2][0];
                const message = await ResponseMessage("welcomeAdmin");
                const status = await ResponseStatus("OK");
                return [status, message, data];

            } else {
                const data = getData[2][0];
                const message = await ResponseMessage("invalidPassword");
                const status = await ResponseStatus("BAD_REQUEST");
                return [status, message, data];
            }

        } else if (role == 101) {
            const data = getData[2][0];
            const message = await ResponseMessage("notLoginPermission");
            const status = await ResponseStatus("OK");

            return [status, message, data]
        }


    } catch (error) {
        console.log("error while logging ====>>", error);
    }
}


module.exports = { handleTheBusinessLogic, verifyCode, logging }