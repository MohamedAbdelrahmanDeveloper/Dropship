import React, { Suspense, lazy, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

import AppLayout from "./layouts/App/app.layout";
import DashboardLayout from "./layouts/dashboard/dashboard.layout";
import { UserContext } from "./context/auth/usercontect";
import RequireAuth from "./protectRoute/auth";
import AuthLayout from "./layouts/auth/Auth.layout";


function App() {
  const {setUserToken, setUserData} = useContext(UserContext)
  useEffect(() => {
    setUserToken(localStorage.getItem('token'))
    setUserData(localStorage.getItem('data'))
  }, [])
  
  return (
      <main>
          <BrowserRouter>
            <ToastContainer />
            <Routes>
              <Route path="/*" element={<AppLayout />}/>
              <Route path="/auth/*" element={<AuthLayout />} />
              <Route path="/dashboard/*" element={<RequireAuth admin><DashboardLayout /></RequireAuth>}/>
            </Routes>
          </BrowserRouter>
      </main>
  )
}

export default App
