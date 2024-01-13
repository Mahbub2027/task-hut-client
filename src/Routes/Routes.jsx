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
import PrivateRoutes from "./PrivateRoutes";
import BrowseJobs from "../Pages/BrowseJobs/BrowseJobs";
import ViewProfile from "../Pages/ViewProfile/ViewProfile";
import AccounAnalytics from "../Pages/AccountAnalytics/AccounAnalytics";
import Settings from "../Pages/Settings/Settings";
import Support from "../Pages/Support/Support";
import Profile from "../Pages/Settings/Profile/Profile";

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
            element: <PrivateRoutes><Contact></Contact></PrivateRoutes>
        },
        {
            path: '/dashboard',
            element: <PrivateRoutes><SignUp></SignUp></PrivateRoutes>
        },
        {
          path:'/browsejobs',
          element: <PrivateRoutes><BrowseJobs></BrowseJobs></PrivateRoutes>
        },
        {
          path: '/viewProfile',
          element: <ViewProfile></ViewProfile>
        },
        {
          path: '/accountAnalytics',
          element: <PrivateRoutes><AccounAnalytics></AccounAnalytics></PrivateRoutes>
        },
        {
          path: '/settings',
          element: <Settings></Settings>,
          children: [
            {
              path: '/settings/profile',
              element: <Profile></Profile>
            },
          ]
        },
        {
          path: '/support',
          element: <Support></Support>
        }
      ]
    },
  ]);