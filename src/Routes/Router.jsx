import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path: 'menu', 
          element: <Home></Home>
        },
        {
          path: 'order/:category',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        // {
        //   path: 'secret',
        //   element: <PrivateRoute><Secret></Secret></PrivateRoute>
        // }
      ]
    },
    // {
    //   path: 'dashboard',
    //   element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, 
    //   children: [
    //     {
    //       path: 'userhome',
    //       element: <UserHome></UserHome>
    //     },
    //     {
    //       path: 'mycart', 
    //       element: <MyCart></MyCart>
    //     },
    //     {
    //       path:'payment',
    //       element: <Payment></Payment>
    //     },
    //     // admin routes
    //     {
    //       path: 'adminhome',
    //       element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
    //     },
    //     {
    //       path: 'allusers', 
    //       element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
    //     },
    //     {
    //       path: 'addItem',
    //       element: <AdminRoute><AddItem></AddItem></AdminRoute>
    //     },
    //     {
    //       path: 'manageitems',
    //       element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
    //     }
    //   ]
    // }
  ]);