const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Task = require("./tasks");

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        require: true,
        trim: true,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error ("Email is invalid");
            }
        },
    },
    password: {
        type:String,
        required: true,
        trim: true,
        validate(value) {
            if (value.length < 6) {
                throw new Error ("Password should be more than 6 characters!");
            }
            else if (value.toLowerCase() == "password") {
                throw new Error("Password cannot be password.");
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        },
    },],
    avatar: {
        type: Buffer,
    },
    timestamps: true,
});