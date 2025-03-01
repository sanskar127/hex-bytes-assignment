import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SecureRoute from "./components/SecureRoute"
import AuthContainer from "./components/AuthContainer"
import { Container } from "@mui/material"
import Login from "./components/Login"
import SignUp from "./components/Signup"
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from "./features/Auth/authSlice"
import Chats from "./pages/Chats/Page"
import ChatWindow from "./components/ChatWindow"
import Layout from "./components/Layout"
import { io } from "socket.io-client"
import { setSocket } from "./features/Socket/socketSlice"

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
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.accesstoken)

  useEffect(() => {
    if (token) {
      // Implementing Socket.io client
      const socket = io('http://localhost:3000/', {
        query: { token }
      })

      dispatch(setSocket(socket))

      socket.on("getDetails", data => dispatch(setUser(data)))

      // Cleanup
      return () => {
        if (socket) {
          // socket.off("getOnlineUsers")
          socket.close()
          dispatch(setSocket(null))
        }
      }
    }
  }, [token, dispatch]);

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
