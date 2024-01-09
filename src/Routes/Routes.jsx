import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/auth/Login/Login";
import SignUp from "../Pages/auth/SignUp/SignUp";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import ViewProfile from "../Pages/ViewProfile/ViewProfile";
import AccounAnalytics from "../Pages/AccountAnalytics/AccounAnalytics";
import Settings from "../Pages/Settings/Settings";
import Support from "../Pages/Support/Support";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      }, 
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/dashboard',
        element: <SignUp></SignUp>
      },
      {
        path: '/viewProfile',
        element: <ViewProfile></ViewProfile>
      },
      {
        path: '/accountAnalytics',
        element: <AccounAnalytics></AccounAnalytics>
      },
      {
        path: '/settings',
        element: <Settings></Settings>
      },
      {
        path: '/support',
        element: <Support></Support>
      }
    ]
  },
]);