import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SecureRoute from "./components/SecureRoute.jsx"
import AuthContainer from "./components/AuthContainer.jsx"
import { Container } from "@mui/material"
import Login from "./components/Login.jsx"
import SignUp from "./components/Signup.jsx"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from "./features/Auth/authSlice"
import Chats from "./pages/Chats/Page"
import ChatWindow from "./components/ChatWindow.jsx"
import Layout from "./components/Layout.jsx"
import { io } from "socket.io-client"

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
  const [details, setDetails] = useState({})
  const token = useSelector(state => state.auth.accesstoken)

  useEffect(() => {
    if (token) {
      // Fetching User Details in exchange of accesstoken
      fetch('http://localhost:3000/api/auth/getdetails', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          setDetails(data.details);
          dispatch(setUser(data.details));
        })
        .catch(error => console.error('Error fetching details:', error));

      // Implementing Socket.io client
      // const socket = io('http://localhost:3000/', {
      //   query: { userId: details._id }
      // })
    }

    // Cleanup
    return () => {

    }

  }, [token]); // Only depend on token, not dispatch or details

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
