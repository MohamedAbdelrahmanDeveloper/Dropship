import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from "../../pages/Home/Home";
import NotFoundPage from "../../pages/NotFound/NotFound";


const Allcategories = lazy(() => import("../../pages/Allcategories/Allcategories"));
const AuthLayout = lazy(() => import("../../layouts/auth/Auth.layout"));
const BuyerInfo = lazy(() => import("../../pages/buyer/buyerInfo"));
const CartPage = lazy(() => import("../../pages/cart/cart"));
const Productdetails = lazy(() => import("../../pages/ProductDetails/Productdetails"));
const AddProductPage = lazy(() => import("../../pages/addProduct/AddProduct"));
const FavoritePage = lazy(() => import("../../pages/favorite/favorite"));

const Explore  = lazy(() => import("../../pages/Explore/Explore"));


export default function AppLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route path="/allcategories" element={<Allcategories />} />
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path="/addProduct" element={<AddProductPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/buyer-info" element={<BuyerInfo />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
