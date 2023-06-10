import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import ClassHome from "../pages/ClassesPage/ClassHome/ClassHome";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import Home from "../pages/Home/Home/Home";
import InstructorHome from "../pages/InstructorPage/InstructorHome/InstructorHome";
import Login from "../pages/Others/Login/Login";
import Register from "../pages/Others/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      // admin pages
      {
        path: '/dashboard/manage-users',
        element: <ManageUsers />
      },
      // instructor pages
      {
        path: '/dashboard/add-class',
        element: <AddClass/>
      },
      {
        path: '/dashboard/my-classes',
        element: <MyClasses/>
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