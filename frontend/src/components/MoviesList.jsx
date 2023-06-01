import './MoviesList.css'

export default function MoviesList() {
  return (
    <ul>
      <li>
        <header>
          <h1>Movie Name</h1>
          <h2>2023</h2>
        </header>
        <img
          src='https://m.media-amazon.com/images/I/51U2Fl-m-tL._AC_UF894,1000_QL80_.jpg'
          alt='Movie Name'
        />
        <p className='sinopsys'>
          <span>Sinopsys: </span>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Doloremque consectetur asperiores nihil accusamus
          voluptate repudiandae veniam perferendis impedit tempora cupiditate,
          quam fugit in dolorum eveniet a, suscipit modi eligendi! Cum?
        </p>
        <p className='genre'>
          <span>Genre: </span>Lorem
        </p>
      </li>
    </ul>
  )
}
