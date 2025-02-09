import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import {logger} from './app/middleware/logger.js'
import { errorHandler } from './app/middleware/error.js'
import { notFound } from './app/middleware/notFound.js'
import exerciseRoutes from './app/routes/exercise.route.js'
import {connectDB} from './config/db.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 8000

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(logger)

// setup static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/exercises', exerciseRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    connectDB()
    console.log(`Server is running on port ${port}`)
})