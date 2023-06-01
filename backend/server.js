import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './config/db.js'
import Movie from './model/Movie.js'

dotenv.config()
const PORT = process.env.PORT || 8080
const app = express()
connectToDB()

app.use('/', async (req, res) => {
  const movies = await Movie.find()
  res.status(200).json(movies)
})

app.listen(PORT, () => {
  console.log(`Hello, server up and running on port ${PORT}`)
})
