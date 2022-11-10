import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import PuffLoader from 'react-spinners/PuffLoader'
import { authContext } from '../Context/Authprovider'
function PrivetLogin({ children }) {
  const { user, loading } = useContext(authContext)

  if (loading) {
    return (
      <div class="h-screen bg-white">
        <div className="flex justify-center items-center h-full">
          <PuffLoader color="#36d7b7" />
        </div>
      </div>
    )
  }

  if (!user && !user?.uid) {
    return children
  }

  return <Navigate to="/" />
}



export default PrivetLogin;