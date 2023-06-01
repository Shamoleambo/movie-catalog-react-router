import { Link } from 'react-router-dom'
import './Movies.css'

export default function Movie({
  movieId,
  name,
  year,
  imageUrl,
  sinopsys,
  genre
}) {
  return (
    <li>
      <header>
        <Link to={`/movies/${movieId}`} className='title-link'>
          <h1>{name}</h1>
        </Link>
        <h2>{year}</h2>
      </header>
      <Link to={`/movies/${movieId}`}>
        <img src={imageUrl} alt='Movie Name' />
      </Link>
      <p className='sinopsys'>
        <span>Sinopsys: </span>
        {sinopsys}
      </p>
      <p className='genre'>
        <span>Genre: </span>
        {genre}
      </p>
    </li>
  )
}
