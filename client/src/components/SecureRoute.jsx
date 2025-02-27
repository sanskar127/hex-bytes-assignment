import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'
import { useGetdetailsQuery } from "../api/authApi"

const SecureRoute = ({ redirectTo }) => {
  const token = useSelector(state => state.auth.accesstoken)
  const { data, error } = useGetdetailsQuery()

  if (token) {
    console.log(data)
    // console.log(error)
    return <Navigate to={redirectTo} replace />
  }

  return <Navigate to='/login' replace />
};

export default SecureRoute
