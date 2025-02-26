import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UserDashboard from "./pages/UserDashboard/Page.jsx"
// import SecureRoute from "./components/SecureRoute.jsx"
import Auth from "./pages/Auth/Page.jsx"
import { Container } from "@mui/material"
// import React from 'react'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <SecureRoute path='/users' />
//   },
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/users',
//         element: <Users />
//       },
//       {
//         path: '/analytics',
//         element: <Analytics />
//       },
//     ]
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
// ])

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <SecureRoute defaultPath="/" redirectTo="/dashboard" />
  // },
  {
    path: '/',
    element: <Auth />
  },
  {
    path: '/dashboard',
    element: <UserDashboard currentUser={"Bhaskar Anna"} />
  }
])

const App = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Container maxWidth={false}
        sx={{
          zIndex: -999,
          position: "fixed",
          left: 0,
          top: 0,
          backgroundColor: "lightgreen",
          width: "100%",
          height: "60vh"
        }}
      />
      <RouterProvider router={router} />
    </Container>
  )
}

export default App
