import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import DashboardPage from "../../pages/dashboard/dashboard";
import NotFoundPage from "../../pages/NotFound/NotFound";
import HeaderDashboard from "../../Components/dashboard/header/header";
import style from "./dashboard.module.css";
import DashboardProducts from "../../pages/dashboard/products";

export default function DashboardLayout() {
  const [sideNav, setSideNav] = useState(false);
  return (
    <>
      <HeaderDashboard />
      <div className="d-flex">
        <div className={`${sideNav && style.sidenavActive} ${style.sidenav}`}>
          <Link to={"/dashboard"}>
            <i className="fa fa-house" aria-hidden="true"></i>
            Dashboard
          </Link>
          <Link to={"/dashboard/products"}>
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            Products
          </Link>
          <Link to={"/dashboard/users"}>
            <i className="fa fa-users" aria-hidden="true"></i>
            Users
          </Link>
        </div>
        <div style={{width: '100%'}}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/products" element={<DashboardProducts />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
