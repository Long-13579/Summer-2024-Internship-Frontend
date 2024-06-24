import { useRoutes } from 'react-router-dom'
import React from 'react'
import { path } from './path'
import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'

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
    }
  ])
}
