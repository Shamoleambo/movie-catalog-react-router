import mongoose from 'mongoose'

const connectToDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI)
  console.log(`Connected to the db - host: ${conn.connection.host}`)
}

export default connectToDB
