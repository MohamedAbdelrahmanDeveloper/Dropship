import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

import AppLayout from "./layouts/App/app.layout";
import DashboardLayout from "./layouts/dashboard/dashboard.layout";


// import Explore from "./pages/Explore/Explore";
const LoadingPage = lazy(() => import("./Components/Loading/Loading"));


function App() {
  return (
      <main>
        <Suspense fallback={<LoadingPage />}>
            <BrowserRouter>
            <ToastContainer />
                <Routes>
                  <Route path="/*" element={<AppLayout />}/>
                  <Route path="/dashboard/*" element={<DashboardLayout />}/>
                </Routes>
          </BrowserRouter>
        </Suspense>
      </main>
  )
}

export default App
