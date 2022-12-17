const { default: mongoose } = require("mongoose");

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minLength: [3, "Name is too short"],
        
    },
    type: {
        type: String,
        required: true,
        minLength: [3, "Name is too short"],
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minLength: [3, "Name is too short"],
    },
    skills: {
        type: Array,
        required: true,
        validate: {
            validator: (value) => {
                if (value.length > 2) {
                    return true
                } else {
                    return false
                }
            },
            message: "Three skills are required"
        }

    },
    adopted: {
        type: Boolean,
        required: true,
    },
    likes: {
        type: Number,
        required: true
    }
}, {
    timestamp: true
})


// model
const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
