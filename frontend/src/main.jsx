import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './routes/RootLayout'
import MovieDetails, {
  loader as singleMovieLoader
} from './routes/MovieDetails'
import MoviesList, { loader as moviesLoader } from './components/MoviesList'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <MoviesList />,
        loader: moviesLoader
      },
      {
        path: '/movies/:movieId',
        element: <MovieDetails />,
        loader: singleMovieLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
