const express = require("express");
const { middlewareForValidation, verificationMiddleware, loginValidation } = require("../Middleware/allmiddleware");
const { validationResult } = require("express-validator");
const { checkMailExisted } = require("../database/repository/operation");
const { handleTheBusinessLogic, verifyCode, logging } = require("../Service/allServiceLogic");
const { ResponseMessage, ResponseStatus } = require("../Utils/index")


module.exports = (app) => {
    app.post("/", (req, res) => {
        res.status(200).json({ message: "Hello from Gunjan !!" })
    });

    app.post("/registration", middlewareForValidation, async (req, res) => {
        try {
            const formdata = req.body;

            const errors = await validationResult(req);

            if (!errors.isEmpty()) {
                res.status(400).json({ message: errors.array() })
            }

            var isEmailExisit = await checkMailExisted(formdata.email, formdata);

            console.log("isEmailExisit", isEmailExisit)

            if (isEmailExisit === false) {

                const [status, message, data] = await handleTheBusinessLogic(formdata);

                res.json({ status: status, message: message, data: data });

            } else {
                const [status, message, data] = isEmailExisit;

                res.json({ status: status, message: message, data: data })
            }



        } catch (error) {
            console.log("error while registration , heres a error ===>>", error);
            res.status(400).json({ message: "error in registration !" })
        }
    });

    app.post("/verifycode", verificationMiddleware, async (req, res) => {
        try {

            const errors = await validationResult(req);

            if (!errors.isEmpty()) {
                res.status(400).json({ message: errors.array() })
            }

            const formdata = req.body;
            const code = formdata.verificationcode;
            const mail = formdata.email;

            const [status, message, data] = await verifyCode(code, mail, formdata);

            res.json({ status, message, data })

        } catch (error) {
            console.log("error while verify code , heres a error ===>>", error);
            res.status(400).json({ message: "error in verify code !", error: error });
        }
    });

    app.post("/loginonlyforadmin", loginValidation, async (req, res) => {
        try {


            const errors = await validationResult(req);

            if (!errors.isEmpty()) {
                res.status(400).json({ message: errors.array() })
            }

            const formdata = req.body;
            const email = formdata.email;
            const password = formdata.password;

            const isEmailExisit = await checkMailExisted(email);

            console.log("isEmailExisit", isEmailExisit);

            if (isEmailExisit == false) {

                const data = [];
                const message = await ResponseMessage("notExist");
                const status = await ResponseStatus("BAD_REQUEST");

                res.json({ status: status, message: message, data: data })

            } else {
                const [status, message, data] = await logging(email, password);
                res.json({ status: status, message: message, data: data })
            }


        } catch (error) {
            console.log("error while login only for admin , heres a error ===>>", error);
        }
    })
}