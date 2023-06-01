import mongoose from 'mongoose'
const { Schema } = mongoose

const movieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  sinopsys: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  }
})

export default mongoose.model('Movie', movieSchema, 'movies')
