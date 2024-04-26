import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './homepage';
const router = createBrowserRouter([
  {
    path: "/",
    element:<HomePage/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <RouterProvider router={router} />
)
