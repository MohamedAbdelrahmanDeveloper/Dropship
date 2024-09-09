import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from "../../pages/Home/Home";
import NotFoundPage from "../../pages/NotFound/NotFound";


import Allcategories from "../../pages/Allcategories/Allcategories"
import BuyerInfo from  "../../pages/buyer/buyerInfo"
import CartPage from  "../../pages/cart/cart"
import Productdetails from "../../pages/ProductDetails/Productdetails"
import AddProductPage from  "../../pages/addProduct/AddProduct"
import FavoritePage from  "../../pages/favorite/favorite"

import Explore from "../../pages/Explore/Explore"


export default function AppLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
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
