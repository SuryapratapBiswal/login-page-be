import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    }
})

const user = mongoose.model('people', userSchema)

export default user;