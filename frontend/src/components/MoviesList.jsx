import { useLoaderData } from 'react-router-dom'
import Movie from './Movie'
import './MoviesList.css'

export async function loader() {
  const response = await fetch('http://localhost:5000/')
  const movies = await response.json()
  return movies
}

export default function MoviesList() {
  const movies = useLoaderData()

  return (
    <ul>
      {movies.map((movie) => (
        <Movie
          key={movie._id}
          name={movie.name}
          year={movie.year}
          imageUrl={movie.imageUrl}
          sinopsys={movie.sinopsys}
          genre={movie.genre}
        />
      ))}
    </ul>
  )
}
