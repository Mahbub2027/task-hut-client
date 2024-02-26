import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/auth/Login/Login";
import SignUp from "../Pages/auth/SignUp/SignUp";
import BuyerSignup from "../Pages/auth/BuyerSignup/BuyerSignup";
import AboutUs from "../Pages/AboutUs/AboutUs";
import PrivateRoutes from "./PrivateRoutes";
import ViewProfile from "../Pages/ViewProfile/ViewProfile";
import AccountAnalytics from "../Pages/AccountAnalytics/AccountAnalytics";
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
import CompanyChat from "../Pages/Dashboard/Company/CompanyChat/CompanyChat";
import JobDetails from "../Pages/FindJobs/JobDetails/JobDetails";
import AllCompanies from "../Pages/FindCompany/AllCompanies";
import CompanyDetails from "../Pages/FindCompany/CompanyDetails/CompanyDetails";
import AllReviews from "../Pages/AllReviews/AllReviews";
import EmployeeDetails from "../Pages/FindEmployee/EmployeeDetails/EmployeeDetails";
import Blogs from "../Pages/Blogs/Blogs";
import SingleBlog from "../Pages/Blogs/SingleBlog";
import CompanyBlogs from "../Pages/Dashboard/Company/CompanyBlogs/CompanyBlogs";
import UserChat from './../Pages/Dashboard/Users/UserChat/UserChat';
import Career from "../Pages/Career/Career";
import Terms from "../Pages/Legal/Terms";
import CookiePolicy from "../Pages/Legal/CookiePolicy";
import PrivacyPolicy from "../Pages/Legal/PrivacyPolicy";
import UpdateJob from "../Pages/Dashboard/Company/UpdateJobs/UpdateJob";


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
        path: '/jobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader: ({params})=> fetch(`https://tusk-hut-server.vercel.app/jobs/${params.id}`)

      },
      {
        path: '/updateJob/:id',
        element: <UpdateJob></UpdateJob>,
        loader: ({params})=> fetch(`https://tusk-hut-server.vercel.app/jobs/${params.id}`)
      },
      {
        path: '/allCompanies',
        element: <AllCompanies></AllCompanies>
      },
      {
        path: "/companyDetails/:id",
        element: <CompanyDetails></CompanyDetails>,
        loader: ({params})=>fetch(`https://tusk-hut-server.vercel.app/companies/${params.id}`)
      },
      {
        path: '/findEmployee',
        element: <FindEmployee></FindEmployee>
      },
      {
        path: '/employeeDetails/:id',
        element: <EmployeeDetails></EmployeeDetails>,
        loader: ({params})=> fetch(`https://tusk-hut-server.vercel.app/employees/${params.id}`)
      },
//-------
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/blogs/:id',
        element: <SingleBlog></SingleBlog>
      },

//-----
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
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
        path: '/allReviews',
        element: <AllReviews></AllReviews>
      },
      {
        path: '/support',
        element: <Support></Support>
      },
      {
        path: '/career',
        element: <Career></Career>
      },
      {
        path: '/terms',
        element: <Terms></Terms>
      },
      {
        path: '/cookie',
        element: <CookiePolicy></CookiePolicy>
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy></PrivacyPolicy>
      },
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
        path: 'companyBlog',
        element: <BuyerRoutes><CompanyBlogs></CompanyBlogs></BuyerRoutes>
      },
      {
        path: 'postAJob',
        element: <PostAJob></PostAJob>
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
        path: 'userChat',
        element: <UserChat></UserChat>
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
        path: 'accountAnalytics',
        element: <AdminRoutes><AccountAnalytics></AccountAnalytics></AdminRoutes>
      },
      {
        path: 'manageUsers',
        element: <AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
      }
    ]
  }
]);