import { createBrowserRouter } from "react-router-dom";
import Destination from "../components/Destination/Destination";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import News from "../components/News/News";
import Register from "../components/Register/Register";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/news",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
