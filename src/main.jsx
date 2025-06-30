import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './page/Home/Home.jsx';
import HomeLayout from './HomeLayout.jsx';
import Team from './page/About/Team/Team.jsx';
import Approach from './page/About/Approach/Approach.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about/team",
        element: <Team />,
      },
      {
        path: "/about/approach",
        element: <Approach />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
