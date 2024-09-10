import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/auth/usercontect'
import { Navigate } from 'react-router-dom'

export default function RequireAuth({children}) {
    const {userToken , userData} = useContext(UserContext)
    // if (!userToken && !userData) {
    //     return <Navigate to={'/auth'} />
    // }
    // else
     return children
    
}
