const { body } = require("express-validator");

const middlewareForValidation = [

    body("first_name").notEmpty().withMessage("Please pass the first name !!"),

    body("last_name").notEmpty().withMessage("Please pass the first name !!"),

    body("email")
        .notEmpty()
        .withMessage("Please pass the email !!")
        .bail()
        .isEmail()
        .withMessage("Please pass the proper email !")
        // .customSanitizer(value=>value.toLowerCase()) this convert uppercase in lowercase .....
        .custom(value => {
            if (/[A-Z]/.test(value)) {
                throw new Error("email must be in lowercase only !");
            }
            return true;
        }),

    body("password")
        .notEmpty()
        .withMessage("please enter password")
        .bail()
        .custom(value => {
            if (value.length < 4) {
                throw new Error("password must be at least 4 characters long !");
            }
            return true;
        }),


    body("role_code")
        .notEmpty()
        .withMessage("Please enter role_code")
        .bail()
        .custom(value => {
            if (value !== "101" && value !== "102") {
                throw new Error("role_code either in 101 or 102")
            }
            return true;
        })
];

const verificationMiddleware = [
    body("verificationcode")
        .notEmpty()
        .withMessage("Verificationcode does not empty !! , please put the value !!")
        .bail()
        .custom(value => {
            if (value.length !== 6) {
                throw new Error("Verification code must be 6 digit long !!")
            }
            return true;
        }),

    body("email")
        .notEmpty()
        .withMessage("Email does not empty !! , ( only for frontend developer )!!")  // for frontend developer
        .bail()
        .isEmail()
        .withMessage("Please pass the proper email !")
        .custom(value => {
            if (/[A-Z]/.test(value)) {
                throw new Error("email must be in lowercase only !");
            }
            return true;
        })
];

const loginValidation = [
    body("email")
        .notEmpty()
        .withMessage("Please pass the email !!")
        .bail()
        .isEmail()
        .withMessage("Please pass the proper email !")
        // .customSanitizer(value=>value.toLowerCase()) this convert uppercase in lowercase .....
        .custom(value => {
            if (/[A-Z]/.test(value)) {
                throw new Error("email must be in lowercase only !");
            }
            return true;
        }),

    body("password")
        .notEmpty()
        .withMessage("please enter password")
        .bail()
        .custom(value => {
            if (value.length < 4) {
                throw new Error("password must be at least 4 characters long !");
            }
            return true;
        }),
];

module.exports = { middlewareForValidation, verificationMiddleware, loginValidation };