import React, { useEffect, useState } from "react";
import "./cart.css";
import { Button } from "react-bootstrap";
import { formatNumber } from "../../lib/formatNumber";
import CartEmpty from "./cart_empty";
import { useNavigate } from "react-router-dom";
import { getAllCarts } from "../../apis/products/cart";
import { productsTotal } from "../../lib/totalPrices";
import CartProduct from "./cart_product";
import LoadingPage from "../../Components/Loading/Loading";

function CartPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)
  let [refresh, setRefresh] = useState(0);
  let [discount, setDiscount] = useState(0);
  let [subtotal, setSubtotal] = useState(0);
  const [delivery, setDelivery] = useState(4);
  const [tax, setTax] = useState(0);
  let [carts, setCarts] = useState([]);

  let [total, setTotal] = useState(0);

  useEffect(() => {
    getAllCarts().then((data) => {
      setCarts(data?.data?.carts);
      // setLoading(false)
    });
  }, [refresh]);

  useEffect(() => {
    setSubtotal(productsTotal(carts));
  }, [carts]);

  return (
    <div className="container">
      <section className="cart_header">
        <Button variant="light" onClick={() => navigate(-1)}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.0312 10.9375L17.9688 25L32.0312 39.0625"
              stroke="black"
              strokeWidth="3.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Cart
        </Button>
      </section>
      {loading ? (carts?.length > 0 ? (
        <main>
          <section
            style={{ width: "100%", height: "80vh" }}
            className="overflow-auto cart-scroll"
          >
            {carts.map((cart, index) => {
              return (
                <CartProduct cart={cart} key={cart._id} setRefresh={setRefresh}/>
              );
            })}
          </section>
          <section className="cart-total">
            <div className="d-flex align-items-center justify-content-between">
              <span>Subtotal</span>
              <span>{formatNumber(subtotal)}</span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <span>Discount</span>
              <span>{formatNumber(discount)}</span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <span>Delivery</span>
              <span>{formatNumber(delivery)}</span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <span>Tax</span>
              <span>{formatNumber(tax)}</span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <span>Total</span>
              <span>{formatNumber(total)}</span>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <Button variant="light" size="lg" className="primary-bg ">
                Checkout
              </Button>
            </div>
          </section>
        </main>
      ) : (
          <CartEmpty />
      )) : <LoadingPage />}
    </div>
  );
}

export default CartPage;
