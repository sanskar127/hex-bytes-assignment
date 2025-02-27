import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'


const SecureRoute = ({ redirectTo }) => {
  const token = useSelector(state => state.auth.accesstoken)

  if (token) {
    return <Navigate to={redirectTo} replace />
  }

  return <Navigate to='/login' replace />
};

export default SecureRoute
