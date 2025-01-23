import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './all-components/home-comp/Home.jsx'
import About from './all-components/about/About.jsx'
import Service from './all-components/service-comp/Service.jsx'
import CancelTicket from './all-components/ticket-cancel/CancelTicket.jsx'
import Album from './all-components/album/Album.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/service',
        element: <Service></Service>
      },
      {
        path: '/contact',
        element: <About></About>
      },
      {
        path: '/cancel-ticket',
        element: <CancelTicket></CancelTicket>
      },
      {
        path: '/album',
        element: <Album></Album>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
