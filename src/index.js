import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/all-course',
    element: <AllCourses />
  },
  {
    path: '/inside-course',
    element: <InsideCourse />
  }
 
])


import App from "./App";
import AllCourses from "./components/allCourses/AllCourses";
import Dashboard from "./components/dashboard/Dashboard";
import InsideCourse from "./components/insideCourse/InsideCourse";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  //   <App />
  // </StrictMode>

<StrictMode>
<RouterProvider router={router} />
</StrictMode>
);
