import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Home from 'pages/Home';
import Introduce from 'pages/Introuduce';
import Graduate from 'pages/Graduate';
import Employment from 'pages/Employment';
import Abroad from 'pages/Abroad';


export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: '/Introduce', element: <Introduce /> },
      { path: '/Graduate', element: <Graduate /> },
      { path: '/Employment', element: <Employment /> },
      { path: '/Abroad', element: <Abroad /> },
    ],
  },
]);
