import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage, { loader as movieLoader } from './pages/HomePage';
import RootLayout from './pages/Root'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />, loader: movieLoader } // Added loader
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
