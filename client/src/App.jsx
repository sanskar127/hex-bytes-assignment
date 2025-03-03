import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SecureRoute from "./components/SecureRoute"
import AuthContainer from "./components/AuthContainer"
import { Container } from "@mui/material"
import Login from "./components/Login"
import SignUp from "./components/Signup"
import Chats from "./pages/Chats/Page"
import ChatWindow from "./components/ChatWindow"
import Layout from "./components/Layout"
import { useSocket } from "./hooks/useSocket"

const router = createBrowserRouter([
  // Default Route
  {
    path: '',
    element: <SecureRoute />
  },

  // Auth Routes
  {
    path: '/auth',
    element: <AuthContainer />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: "signup",
        element: <SignUp />
      }
    ]
  },

  // Secured Routes
  {
    path: '/secured',
    element: <Layout />,
    children: [
      // Admin Routes
      {
        path: 'admin',
        children: [
          {
            path: 'chats',
            element: <Chats />
          },
        ]
      },

      // User Routes
      {
        path: 'chats',
        element: <ChatWindow />
      }
    ]
  }
])

const App = () => {
  
  // Listening Socket
  useSocket()

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
