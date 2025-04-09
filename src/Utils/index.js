module.exports.ResponseMessage = (mes_type) => {
    const messages = {
        emailAlreadyExisted: "This email is already existed !! , try different mail ",
        noDataFound: "Data not found",
        sended: "varification code is successfully send to this email id ! , kindly check and verify it in this page !!",
        verifedSuccessfully: "code is verified successfully !🥳 congratulation for being registered 😊 !!",
        invalidCode: "invalid code or mail is not same as previous one , please try again !!",
        alreadyVerifed: "Already verified !! no need to verify again !!",
        invalidEmail: "Please pass privious mail , you are passing new mail which is not same to previous mail !",
        notExist: "This email is not exist !!",
        notLoginPermission: "You are not allowed to login from here because you are customer ! ",
        welcomeAdmin: "Welcome Admin ! succeed in log in 😊!!",
        invalidPassword: "Password is incorrect ! try again please "
    }
    return messages[mes_type];
}


module.exports.ResponseStatus = (status) => {
    const statusCode = {
        OK: 200,
        BAD_REQUEST: 400,
        NOT_FOUND: 404,
        INTERNAL_ERROR: 500,
    }
    return statusCode[status]
}