import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import './index.css'
import Error from './Error';
import Layout from './components/Layout';
import Countries,{loader as countriesLoader} from './pages/Countries';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <Error />,
    children:[
      { 
        index:true, 
        element:<Countries/>, 
        loader: countriesLoader
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
