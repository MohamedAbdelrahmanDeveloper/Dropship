import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../../pages/dashboard/addproduct'

export default function DashboardLayout() {
  return (
    <div>
         <Routes >
            <Route path="/" element={<AddProduct />}/>
        </Routes>
    </div>
  )
}
