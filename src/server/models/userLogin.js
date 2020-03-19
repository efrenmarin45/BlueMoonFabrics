const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    empID: {
        type: String,
        trim: true,
        unique: true,
        required: "Employee ID is required"
    },
    Password: {
        type: String,
        trim: true,
        validate: [({length}) => length >= 6, "Password should be longer"],
        required: true
    },
    timeStamp: {
        type: Date,
        default:Date.now
    }
})

// const User = mongoose.model("User", userSchema);

module.exports = User  = mongoose.model("User", userSchema);