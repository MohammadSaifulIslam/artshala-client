import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import InstructorHome from "../pages/InstructorPage/InstructorHome/InstructorHome";
import Login from "../pages/Others/Login/Login";
import Register from "../pages/Others/Login/Register/Register";

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
        element: <InstructorHome/>
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