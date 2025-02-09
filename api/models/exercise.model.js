import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    sets: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
    },
    image: {
        type: String,
    }
}, {
    timestamps: true
})

const Exercise = mongoose.model("Exercise", exerciseSchema)

export default Exercise