import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Instructors from './pages/Instructors/Instructors.jsx';
import Classes from './pages/Classes/Classes.jsx';
import StudentDashboard from './pages/dashboard/studentDashboard/StudentDashboard.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import Enrol from './components/Enrol.jsx';
import TeacherDashboard from './pages/dashboard/teacherDashboard/TeacherDashboard.jsx';
import AddClass from './components/AddClass.jsx';
import Error from './components/Error.jsx';
import Dashboards from './layout/Dashboards.jsx';
import Blogg from './components/Blogg.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/blogs/:id',
        element: <Blogg></Blogg>,
        loader: ({ params }) => fetch(`https://language-school-server-production-59b9.up.railway.app/blogs/${params.id}`)
      },
      {
        path: '/teacherDashboard',
        element: <PrivateRoutes><TeacherDashboard></TeacherDashboard></PrivateRoutes>
      },
      {
        path: '/addClass',
        element: <AddClass></AddClass>
      }
    ]
  },
  {
    path: '/*',
    element: <Error></Error>
  },
  {
    path: '/dashboard',
    element: <Dashboards></Dashboards>,
    children: [
      {
        path: 'studentdashboard',
        element: <PrivateRoutes><StudentDashboard></StudentDashboard></PrivateRoutes>
      },
      {
        path: 'enrol',
        element: <Enrol></Enrol>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>,
    </AuthProvider>
  </div>
)
