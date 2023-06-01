import { useLoaderData } from 'react-router-dom'
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
        <li key={movie._id}>
          <header>
            <h1>{movie.name}</h1>
            <h2>{movie.year}</h2>
          </header>
          <img src={movie.imageUrl} alt='Movie Name' />
          <p className='sinopsys'>
            <span>Sinopsys: </span>
            {movie.sinopsys}
          </p>
          <p className='genre'>
            <span>Genre: </span>
            {movie.genre}
          </p>
        </li>
      ))}
    </ul>
  )
}
