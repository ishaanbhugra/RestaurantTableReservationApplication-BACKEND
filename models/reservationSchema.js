import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First Name must contain atleast 3 letters.!"],
        maxLength:[10,"First Name must not exceed 10 letters.!"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last Name must contain atleast 3 letters.!"],
        maxLength:[10,"Last Name must not exceed 10 letters.!"]
    },
    email:{
        type:String,
        required:true,
        // validate: [validator.isEmail, "Enter a valid email.!"],
        validate: {
            validator: validator.isEmail,
            message: "Enter a valid email.!"
        }
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Mobile number should contain 10 digits.!"],
        maxLength:[10,"Mobile number should contain 10 digits.!"]
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
})

export const Reservation= mongoose.model('Reservation', reservationSchema)