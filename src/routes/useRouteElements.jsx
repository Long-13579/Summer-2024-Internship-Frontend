import { useRoutes } from 'react-router-dom'
import React from 'react'
import { path } from './path'
import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'
import NowShowing from '@/pages/ShowingFilmPage/ShowingFilmPage'
import ComingSoon from '@/pages/ComingSoonFilmPage/ComingSoon'

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
        }
      ]
    },
    {
      path: '/nowshowing', 
      element: <MainLayout />,
      children: [
        {
          path: path.home,
          element: <NowShowing />,
          index: true
        }
      ]
      },
      {
        path: '/comingsoon', 
        element: <MainLayout />,
        children: [
          {
            path: path.home,
            element: <ComingSoon />,
            index: true
          }
        ]
        }
  
  ])
}
