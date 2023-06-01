import classes from './MovieDetails.module.css'

export default function MovieDetails() {
  return (
    <article className={classes.article}>
      <header className={classes.header}>
        <h1 className={classes.h1}>Movie Title</h1>
        <h2 className={classes.h2}>Year</h2>
      </header>
      <figure>
        <img
          className={classes.img}
          src='https://m.media-amazon.com/images/M/MV5BMTUyMDQ1NjY4Ml5BMl5BanBnXkFtZTgwMzA3MDEwNzE@._V1_FMjpg_UX1000_.jpg'
          alt='Movie Title'
        />
        <figcaption className={classes.figcaption}>
          Movie Title Poster
        </figcaption>
      </figure>
      <div className={classes.sinopsys}>
        <p>
          <span>Sinopsys: </span>Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Distinctio odit debitis nemo deleniti assumenda,
          nisi porro magnam minima? Voluptas ipsum deleniti, unde nesciunt
          laborum ducimus repellat saepe mollitia? Cum, iusto.
        </p>
      </div>
      <div className={classes.genre}>
        <p>
          <span>Genre: </span>Sci-fi
        </p>
      </div>
    </article>
  )
}
