import React from "react"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/home";
import Gig from "./pages/gig/gig";
import Gigs from "./pages/gigs/gigs";
import Orders from "./pages/orders/orders";
import Add from "./pages/add/add";
import Messages from "./pages/messages/messages";
import MyGigs from "./pages/myGigs/MyGigs";
import Login from "./pages/login/login";
import Message from "./pages/message/message";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "./App.css";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Register from "./pages/register/Register";
import Pay from "./pages/pay/pay";
import Success from "./pages/Success/Success";


function App() {


  const queryClient = new QueryClient();
  const Layout = () =>{
    return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>

    </div>
    )
    
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/gig",
          element:<Gigs/>
        },
        {
          path:"/gig/:id",
          element:<Gig/>
        },
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/mygigs",
          element:<MyGigs/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/add",
          element:<Add/>
        },
        {
          path:"/messages",
          element:<Messages/>
        },
        {
          path:"/message/:id",
          element:<Message/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/pay/:id",
          element:<Pay/>
        },
        {
          path:"/success",
          element:<Success/>
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
