import React from 'react'
import ReactDOM from 'react-dom/client'

import {
    createBrowserRouter,
    createHashRouter,
    RouterProvider,
  } from "react-router-dom";


import App from './App'
import { Finance } from './components/finance/Finance';

const router = createHashRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/finance",
      element: <Finance/>,
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)