import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <>
      <header>
        <h1>Movie Catalog</h1>
      </header>
      <Outlet />
    </>
  )
}
