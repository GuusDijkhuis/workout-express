import express from 'express'
import { getExercise, getExercises, postExercise, deleteExercise, putExercise } from '../controllers/exercise.controller.js'

const router = express.Router()

router.get('/', getExercises)
router.get('/:id', getExercise)
router.post('/', postExercise)
router.put('/:id', putExercise)
router.delete('/:id', deleteExercise)

export default router