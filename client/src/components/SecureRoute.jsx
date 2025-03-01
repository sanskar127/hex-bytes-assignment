import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


const SecureRoute = () => {
  const user = useSelector(state => state.auth.user)
  const token = useSelector(state => state.auth.accesstoken)

  // If user is logged in
  if (token) {
    if (!user) {
      return <div>Loading...</div>
    }

    // When Super User Logged in
    if (user.role === "admin") {
      return <Navigate to='/secured/admin' replace />
    }

    // When User Logged in
    if (user.role === "user") {
      return <Navigate to='/secured/chats' replace />
    }
  }

  return <Navigate to='/auth' replace />
};

export default SecureRoute
