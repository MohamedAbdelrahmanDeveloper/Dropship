import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

import AppLayout from "./layouts/App/app.layout";
import DashboardLayout from "./layouts/dashboard/dashboard.layout";


function App() {
  return (
      <main>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/*" element={<AppLayout />}/>
            <Route path="/dashboard/*" element={<DashboardLayout />}/>
          </Routes>
        </BrowserRouter>
      </main>
  )
}

export default App
