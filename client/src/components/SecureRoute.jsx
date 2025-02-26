import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

const SecureRoute = ({ defaultPath, redirectTo }) => {
//   const { user } = useSelector((state: RootState) => state.auth)
    const user = null

  if (user) {
    return <Navigate to={redirectTo} replace />
  }
  
  return <Navigate to={`/${defaultPath}`} replace />
};

export default SecureRoute
