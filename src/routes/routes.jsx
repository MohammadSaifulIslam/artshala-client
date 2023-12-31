import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import ClassHome from "../pages/ClassesPage/ClassHome/ClassHome";
import ContactPage from "../pages/ContactPage/ContactPage";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import AdminFeedback from "../pages/Dashboard/Admin/ManageClasses/AdminFeedback/AdminFeedback";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import EnrolledClass from "../pages/Dashboard/Student/EnrolledClass/EnrolledClass";
import MySelectedClasses from "../pages/Dashboard/Student/MySelectedClasses/MySelectedClasses";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory/PaymentHistory";
import Home from "../pages/Home/Home/Home";
import InstructorHome from "../pages/InstructorPage/InstructorHome/InstructorHome";
import ErrorPage from "../pages/Others/ErrorPage/ErrorPage";
import Login from "../pages/Others/Login/Login";
import Register from "../pages/Others/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/instructors',
        element: <InstructorHome />
      },
      {
        path: '/classes',
        element: <ClassHome />
      },
      {
        path: '/contact',
        element: <ContactPage/>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      // admin dashboard
      {
        path: '/dashboard/manage-users',
        element: <ManageUsers />
      },
      {
        path: '/dashboard/manage-classes',
        element: <ManageClasses />
      },
      {
        path: '/dashboard/feedback/:id',
        element: <AdminFeedback />
      },
      // instructor dashboard
      {
        path: '/dashboard/add-class',
        element: <AddClass />
      },
      {
        path: '/dashboard/my-classes',
        element: <MyClasses />
      },
      // student dashboard
      {
        path: '/dashboard/my-selected-classes',
        element: <MySelectedClasses />
      },
      {
        path: '/dashboard/payment/:id',
        element: <PrivateRoutes><Payment /></PrivateRoutes>
      },
      {
        path: '/dashboard/enrolled-classes',
        element: <PrivateRoutes><EnrolledClass /></PrivateRoutes>
      },
      {
        path: '/dashboard/payment-history',
        element: <PrivateRoutes><PaymentHistory /></PrivateRoutes>
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);

export default router;