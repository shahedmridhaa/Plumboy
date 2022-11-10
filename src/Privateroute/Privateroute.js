import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { authContext } from '../Context/Authprovider';

const Privateroute = ({children}) => {
   const {user, loading} = useContext(authContext)
   const location = useLocation() 

    if(loading){
        return <div class="h-screen bg-white">
        <div className="flex justify-center items-center h-full">
          <PuffLoader color="#36d7b7" />
        </div>
      </div>
    }



   if(user){
    return children;
   }
    return <Navigate to="/login" state = {{form:location}} replace />
   };

  

export default Privateroute;