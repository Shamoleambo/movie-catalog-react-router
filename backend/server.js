import express from 'express'

const app = express()

app.use((req, res) => {
  res.status(200).json({ message: 'Hello There Friend!' })
})

app.listen(5000, () => {
  console.log(`Hello, server up and running`)
})
