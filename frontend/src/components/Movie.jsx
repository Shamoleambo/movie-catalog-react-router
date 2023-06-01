import './Movies.css'

export default function Movie({ name, year, imageUrl, sinopsys, genre }) {
  return (
    <li>
      <header>
        <h1>{name}</h1>
        <h2>{year}</h2>
      </header>
      <img src={imageUrl} alt='Movie Name' />
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
