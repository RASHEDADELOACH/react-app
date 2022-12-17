import mongoose from "mongoose";

const JokeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
const joke = mongoose.model('joke', JokeSchema)
module.exports = joke