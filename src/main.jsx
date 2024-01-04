import React from 'react'
import ReactDOM from 'react-dom/client'

import {
    createBrowserRouter,
    HashRouter,
    RouterProvider,
  } from "react-router-dom";


import App from './App'
import { Finance } from './components/finance/Finance';

const router = createBrowserRouter([
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