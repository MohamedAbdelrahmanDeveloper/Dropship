import React, { useContext } from 'react'
import { UserContext } from '../context/auth/usercontect'
import { Navigate } from 'react-router-dom'

export default function NoRequireAuth({children}) {
    const {userToken , userData} = useContext(UserContext)
    if (userToken && userData) {
        window.location.href = '/'
    }
    else return children
}
