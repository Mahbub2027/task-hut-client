import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/auth/Login/Login";
import SignUp from "../Pages/auth/SignUp/SignUp";
import BuyerSignup from "../Pages/auth/BuyerSignup/BuyerSignup";
import AboutUs from "../Pages/AboutUs/AboutUs";
import PrivateRoutes from "./PrivateRoutes";
import BrowseJobs from "../Pages/BrowseJobs/BrowseJobs";
import ViewProfile from "../Pages/ViewProfile/ViewProfile";
import AccountAnalytics from "../Pages/AccountAnalytics/AccountAnalytics";
// import Settings from "../Pages/Settings/Settings";
import Support from "../Pages/Support/Support";
import EditProfile from "../Pages/Dashboard/Common/EditProfile/EditProfile";
import Security from "../Pages/Dashboard/Common/Security/Security";
import TrustVerification from "../Pages/Dashboard/Common/TrustVerification/TrustVerification";
import Account from "../Pages/Dashboard/Common/Account/Account";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import SavedJobPosts from "../Pages/Dashboard/Users/SavedJobPosts/SavedJobPosts";
import AppliedJobs from "../Pages/Dashboard/Users/AppliedJobs/AppliedJobs";
import JobInterviews from "../Pages/Dashboard/Users/JobInterviews/JobInterviews";
import CompanyPosts from "../Pages/Dashboard/Company/CompanyPosts/CompanyPosts";
import ApplicantList from "../Pages/Dashboard/Company/ApplicantList/ApplicantList";
import ShortListedApplicants from "../Pages/Dashboard/Company/ShortListedApplicants/ShortListedApplicants";
import InterviewTask from "../Pages/Dashboard/Company/InterviewTask/InterviewTask";
import Notifications from "../Pages/Dashboard/Common/Notifications/Notifications";
import FindJobs from "../Pages/FindJobs/FindJobs";
import FindEmployee from "../Pages/FindEmployee/FindEmployee";
import PostAJob from "../Pages/Dashboard/Company/PostAJob/PostAJob";
import AdminRoutes from "./AdminRoutes";
import BuyerRoutes from "./BuyerRoutes";
import EmployeeInfo from "../Pages/FindEmployee/EmployeeInfo";
import CompanyChat from "../Pages/Dashboard/Company/CompanyChat/CompanyChat";


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
        path: '/findJobs',
        element: <FindJobs></FindJobs>
      },
      {
        path: '/findEmployee',
        element: <FindEmployee></FindEmployee>
      },
      {
        path:'/testemployee',
        element:<EmployeeInfo></EmployeeInfo>
      },
      {
        path:"findEmployee/:id",
        element:<EmployeeInfo></EmployeeInfo>,
        loader:({params}) => fetch(`https://tusk-hut-server.vercel.app/users/employee/${params.id}`)
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/browsejobs',
        element: <PrivateRoutes><BrowseJobs></BrowseJobs></PrivateRoutes>
      },
      {
        path: '/viewProfile',
        element: <PrivateRoutes><ViewProfile></ViewProfile></PrivateRoutes>
      },
      {
        path: '/accountAnalytics',
        element: <PrivateRoutes><AccountAnalytics></AccountAnalytics></PrivateRoutes>
      },
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
      // company 
      {
        path: 'companyPosts',
        element: <BuyerRoutes><CompanyPosts></CompanyPosts></BuyerRoutes>
      },
      {
        path: 'companyChat',
        element: <BuyerRoutes><CompanyChat></CompanyChat></BuyerRoutes>
      },
      {
        path: 'postAJob',
        element: <BuyerRoutes><PostAJob></PostAJob></BuyerRoutes>
      },
      {
        path: 'applicantList',
        element: <BuyerRoutes><ApplicantList></ApplicantList></BuyerRoutes>
      },
      {
        path: 'shortlistedApplicants',
        element: <BuyerRoutes><ShortListedApplicants></ShortListedApplicants></BuyerRoutes>
      },
      {
        path: 'interviewTask',
        element: <BuyerRoutes><InterviewTask></InterviewTask></BuyerRoutes>
      },
      // employee
      {
        path: 'savedJobs',
        element: <SavedJobPosts></SavedJobPosts>
      },
      {
        path: 'appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'jobInterview',
        element: <JobInterviews></JobInterviews>
      },
      // common routes
      {
        path: 'editProfile',
        element: <EditProfile></EditProfile>
      },
      {
        path: 'notifications',
        element: <Notifications></Notifications>
      },
      {
        path: 'trustVerification',
        element: <TrustVerification></TrustVerification>
      },
      {
        path: 'security',
        element: <Security></Security>
      },
      {
        path: 'account',
        element: <Account></Account>
      },
      // admin 
      {
        path: 'manageUsers',
        element: <AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
      }
    ]
  }
]);