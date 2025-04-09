const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RegistrationSchema = new Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    password: { type: String },
    role_code: { type: String },  // 101 for customers , 102 for admins
    role_name: { type: String },
    is_available: { type: String, default: "1" },
}, {
    timestamps: true
});

const commonSchema = mongoose.model(
    "Resistration_Details",
    RegistrationSchema
);

module.exports = { commonSchema };
