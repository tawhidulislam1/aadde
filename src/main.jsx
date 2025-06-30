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
import Affiliates from './page/About/Affiliates/Affiliates.jsx';
import Work from './page/Work/Work.jsx';
import Service1 from './page/Services/Service1.jsx';
import Service2 from './page/Services/Service2.jsx';
import Service3 from './page/Services/Service3.jsx';
import Service4 from './page/Services/Service4.jsx';
import Service5 from './page/Services/Service5.jsx';
import Career from './page/Career/Career.jsx';
import ProBono from './page/ProBono/ProBono.jsx';

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
      {
        path: "/about/affiliates",
        element: <Affiliates />,
      },
      {
        path: "/work",
        element: <Work></Work>,
      },
      {
        path: "/Service1",
        element: <Service1></Service1>,
      },
      {
        path: "/Service2",
        element: <Service2></Service2>,
      },
      {
        path: "/Service3",
        element: <Service3></Service3>,
      },
      {
        path: "/Service4",
        element: <Service4></Service4>,
      },
      {
        path: "/Service5",
        element: <Service5></Service5>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/ProBono",
        element: <ProBono></ProBono>,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
