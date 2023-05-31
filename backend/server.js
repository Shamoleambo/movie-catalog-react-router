import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 8080
const app = express()

app.use((req, res) => {
  res.status(200).json({ message: 'Hello There Friend!' })
})

app.listen(PORT, () => {
  console.log(`Hello, server up and running on port ${PORT}`)
})
