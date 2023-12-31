import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Main from './Layout/Main.jsx';
import OrderReview from './components/OrderReview/OrderReview.jsx';
import Grandpa from './components/Grandpa/Grandpa.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('/public/t-shart.json')
      },
      {
        path:'review',
        element:<OrderReview></OrderReview>
      },
      {
        path:'/grandpa',
        element:<Grandpa />
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
