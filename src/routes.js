import React from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import UserProfile from "/Users/liam.simmons/Development/code/phase-2/react-hooks-react-router-code-along-v6/src/components/UserProfile.js"
import ErrorPage from "./pages/ErrorPage"

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile/:id",
    element: <UserProfile />,
    errorElement: <ErrorPage />,
  },
]

export default routes
