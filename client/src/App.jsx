import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UserDashboard from "./pages/UserDashboard/Page.jsx"
import AdminDashboard from "./pages/AdminDashboard/Page.jsx"
// import SecureRoute from "./components/SecureRoute.jsx"
import Auth from "./pages/Auth/Page.jsx"
import { Container } from "@mui/material"
// import ChatWindow from "./components/ChatWindow.jsx"
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
  },
  {
    path: '/admin/dashboard',
    element: <AdminDashboard />,
    children: [
      {
        path: '/chats',
        element: {}
      }
    ]
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
      {/* <ChatWindow/> */}
      <RouterProvider router={router} />
    </Container>
  )
}

export default App
