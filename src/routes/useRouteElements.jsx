import { useRoutes } from 'react-router-dom'
import React from 'react'
import { path } from './path'
import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'
import MovieDetailPage from '@/pages/MovieDetailPage'
import CheckoutPage from '@/pages/CheckoutPage/CheckoutPage'
import OnCasting from '@/pages/ShowingFilmPage/onCasting'
import UpComing from '@/pages/ComingSoonFilmPage/upComing'

export default function useRouteElements() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: path.home,
          element: <HomePage />,
          index: true
        },
        {
          path: path.film,
          element: <MovieDetailPage />
        },
        {
          path: path.nowShowing,
          element: <OnCasting />
        },
        {
          path: path.comingSoon,
          element: <UpComing />
        },
        {
          path: path.checkout,
          element: <CheckoutPage />
        }
      ]
    }
  ])
}
