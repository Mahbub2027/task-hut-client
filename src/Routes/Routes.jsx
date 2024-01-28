import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/auth/Login/Login";
import SignUp from "../Pages/auth/SignUp/SignUp";
import BuyerSignup from "../Pages/auth/BuyerSignup/BuyerSignup";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import PrivateRoutes from "./PrivateRoutes";
import BrowseJobs from "../Pages/BrowseJobs/BrowseJobs";
import ViewProfile from "../Pages/ViewProfile/ViewProfile";
import AccounAnalytics from "../Pages/AccountAnalytics/AccounAnalytics";
// import Settings from "../Pages/Settings/Settings";
import Support from "../Pages/Support/Support";
import Profile from "../Pages/Dashboard/Users/Profile/Profile";
import Payment from "../Pages/Dashboard/Users/Payment/Payment";
import Security from "../Pages/Dashboard/Users/Security/Security";
import TrustVerification from "../Pages/Dashboard/Users/TrustVerification/TrustVerification";
import Account from "../Pages/Dashboard/Users/Account/Account";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";


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
          path: '/buyerSignup',
          element: <BuyerSignup></BuyerSignup>,
        },
        {
            path: '/aboutUs',
            element: <AboutUs></AboutUs>
        },
        {
            path: '/contact',
            element: <PrivateRoutes><Contact></Contact></PrivateRoutes>
        },
        // {
        //     path: '/dashboard',
        //     element: <PrivateRoutes><SignUp></SignUp></PrivateRoutes>
        // },
        {
          path:'/browsejobs',
          element: <PrivateRoutes><BrowseJobs></BrowseJobs></PrivateRoutes>
        },
        {
          path: '/viewProfile',
          element: <PrivateRoutes><ViewProfile></ViewProfile></PrivateRoutes>
        },
        {
          path: '/accountAnalytics',
          element: <PrivateRoutes><AccounAnalytics></AccounAnalytics></PrivateRoutes>
        },
        // settings
        // {
        //   path: '/settings',
        //   element: <Settings></Settings>,
        //   children: [
        //     {
        //       path: '/settings',
        //       element: <Profile></Profile>
        //     },
        //     {
        //       path: '/settings/password',
        //       element: <Password></Password>
        //     },
        //     {
        //       path: '/settings/payment',
        //       element: <Payment></Payment>
        //     },
        //     {
        //       path: '/settings/security',
        //       element: <Security></Security>
        //     },
        //     {
        //       path: '/settings/trustVerification',
        //       element: <TrustVerification></TrustVerification>
        //     },
        //     {
        //       path: '/settings/account',
        //       element: <Account></Account>
        //     },
        //   ]
        // },
        {
          path: '/support',
          element: <Support></Support>
        }
      ]
    },
    // dashboard
    {
      path: "/dashboard",
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
        {
          path: 'profile',
          element: <ViewProfile></ViewProfile>
        },
        {
          path: 'editProfile',
          element: <Profile></Profile>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'security',
          element: <Security></Security>
        },
        {
          path: 'trustVerification',
          element: <TrustVerification></TrustVerification>
        },
        {
          path: 'account',
          element: <Account></Account>
        },
        // admin 
        {
          path: 'manageUsers',
          element: <ManageUsers></ManageUsers>
        }
      ]
    }
  ]);