import { Outlet, Link } from 'react-router-dom'
import './RootLayout.css'

export default function RootLayout() {
  return (
    <>
      <header className='main-header'>
        <Link className='link' to='/'>
          <h1>Movie Catalog</h1>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
