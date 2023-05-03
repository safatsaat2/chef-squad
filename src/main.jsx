import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import Layout from './component/Layout/Layout'
import Login from './component/Login/Login'
import Register from './component/Register/Register'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    children:[
      {
      path:'/',
      element:<Home></Home>
    },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
