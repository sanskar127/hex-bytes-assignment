import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UserDashboard from "./pages/UserDashboard/Page.jsx"
import AdminDashboard from "./pages/AdminDashboard/Page.jsx"
import SecureRoute from "./components/SecureRoute.jsx"
import AuthContainer from "./components/AuthContainer.jsx"
import { Container } from "@mui/material"
import Login from "./components/Login.jsx"
import SignUp from "./components/Signup.jsx"
import ChatWindow from "./components/ChatWindow.jsx"

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
  {
    path: '/',
    element: <SecureRoute redirectTo="/dashboard" />
  },
  {
    path: '/',
    element: <AuthContainer />,
    children: [
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signup",
        element: <SignUp/>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <UserDashboard currentUser={"Bhaskar Anna"} />
  },
  {
    path: '/admin/dashboard',
    element: <AdminDashboard />,
    children: [
      // {
      //   path: '/chats',
      //   element: {}
      // }
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
      {/* {console.log(typeof localStorage.getItem("token"))} */}
      <RouterProvider router={router} />
    </Container>
  )
}

export default App
