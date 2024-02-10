import mongoose from "mongoose";

const userSchema:any = new mongoose.Schema({
    name: {
        type: "string",
        required: true,
        trim: true
    },
    email: {
        type: "string",
        unique: true,
        required: true,
        lowercase: true
    },
    username: {
        type: "string",
        unique: true,
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    token: {
        type: 'string',
        required: true
    }
})

const User = mongoose.model('users', userSchema);

export default User;