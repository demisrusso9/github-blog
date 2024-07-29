import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Blog } from '@/pages/Blog'
import { Post } from '@/pages/Post'

export function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Blog />,
    },
    {
      path: '/post',
      element: <Post />,
    }
  ])

  return <RouterProvider router={router} />
}
