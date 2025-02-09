import mongoose from "mongoose";
import Exercise from "../../models/exercise.model.js"

export const getExercises = async (req, res, next) => {
    try {
        const exercises = await Exercise.find()
        res.status(200).json({success: true, data: exercises})
    } catch (error) {
        console.log('Eror in GET Exercises', error);
        res.status(500).json({success: false, message: 'Server error'})
    }
}

export const getExercise = async (req, res, next) => {
    const {id} = req.params
    try {
        const exercise = await Exercise.findById(id)
        res.status(200).json({success: true, data: exercise})
    } catch (error) {
        res.status(200).json({success: false, message: 'Server Error'})
    }
}

export const postExercise = async (req, res, next) => {
    const exercise = req.body

    const newExercise = new Exercise(exercise)

    try {
        await newExercise.save()
        res.status(201).json({success: true, data: newExercise})
    } catch (error) {
        console.log('Error in POST Exercise: ', error);
        res.status(500).json({ success: false, message: `Server Error`})
    }
}

export const putExercise = async (req, res, next) => {
    const {id} = req.params

    const exercise = req.body
   
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({success: false, message: 'Invalid Exercise Id'})
    }

    try {
        const updatedExercise = await Exercise.findByIdAndUpdate(id, exercise, {new: true})
        res.status(200).json({success: true, data: updatedExercise})
    } catch (error) {
        res.status(500).json({success: false, message: 'Server Error'})
    }
}

export const deleteExercise = async (req, res, next) => {
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({success: false, message: 'Invalid Exercise Id'})
    }

    try {
        await Exercise.findByIdAndDelete(id)
        res.status(200).json({success: true, message: `Exercise ${id} deleted`})
    } catch(error) {
        console.log('Error in DELETE Exercise: ', error);
        res.status(500).json({ success: false, message: `Server Error`})
    }
}