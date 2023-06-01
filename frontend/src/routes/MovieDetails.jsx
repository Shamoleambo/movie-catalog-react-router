import { useLoaderData } from 'react-router-dom'
import classes from './MovieDetails.module.css'

export async function loader({ params }) {
  const data = await fetch(`http://localhost:5000/movies/${params.movieId}`)
  const movie = await data.json()
  return movie
}

export default function MovieDetails() {
  const movie = useLoaderData()

  return (
    <article className={classes.article}>
      <header className={classes.header}>
        <h1 className={classes.h1}>{movie.name}</h1>
        <h2 className={classes.h2}>{movie.year}</h2>
      </header>
      <figure>
        <img className={classes.img} src={movie.imageUrl} alt={movie.name} />
        <figcaption className={classes.figcaption}>
          {movie.name} Poster
        </figcaption>
      </figure>
      <div className={classes.sinopsys}>
        <p>
          <span>Sinopsys: </span>
          {movie.sinopsys}
        </p>
      </div>
      <div className={classes.genre}>
        <p>
          <span>Genre: </span>
          {movie.genre}
        </p>
      </div>
    </article>
  )
}
