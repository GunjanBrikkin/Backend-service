module.exports.ResponseMessage = (mes_type) => {
    const messages = {
        emailAlreadyExisted: "This email is already existed !! , try different mail ",
        noDataFound: "Data not found",
    }
    return messages[mes_type];
}


module.exports.ResponseStatus = (status) => {
    const statusCode = {
        OK : 200,
        BAD_REQUEST: 400,
        NOT_FOUND: 404,
        INTERNAL_ERROR: 500,
    }
    return statusCode[status]
}