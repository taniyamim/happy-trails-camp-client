import {
    createBrowserRouter, useParams,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddAClass from "../Pages/Dashboard/AddAClass/AddAClass";
import InstructorClasses from "../Pages/Dashboard/InstructorClasses/InstructorClasses";
import MyEnrolledClass from "../Pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";




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
          path: 'instructors', 
          element: <Instructors></Instructors>,
          
        },
        {
          path: 'classes',
          element: <Classes></Classes>,
         
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        }
        
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, 
      children: [
        {
          path: 'myclass', 
          element: <MyClass></MyClass>,
        },
        {
          path: 'allusers', 
          element: <AllUsers></AllUsers>,
        },
        {
          path: 'myclass', 
          element: <MyClass></MyClass>,
        },
        {
          path: 'addAClass', 
          element: <AddAClass></AddAClass>,
        },
        {
          path: 'insClasses', 
          element: <InstructorClasses></InstructorClasses>,
        },
        {
          path: 'myEnrolledClass', 
          element: <MyEnrolledClass></MyEnrolledClass>,
        },
        {
          path: 'payment/:id', 
          element: <Payment></Payment>,
          loader:({ params }) => fetch(`http://localhost:5000/selectedClasses/${params.id}`),
        },
        {
          path: 'manageClasses', 
          element: <ManageClasses></ManageClasses>
        },
        {
          path: 'paymentHistory', 
          element: <PaymentHistory></PaymentHistory>
        },
        
      ]
    }
  ]);