import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import style from "./productsection.module.css";
import { Link } from "react-router-dom";
import ProductCard from "../Card/ProductCard";
import ProductCardSmall from "../Card/ProductCardSmall";
export default function Productsection({ products, title, small}) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    products.length > 0 && setLoading(false)
  }, [products])
  return (
    <>
      <div className="container">
        <div className={style.adress}>
          <h3 className="bold">{title}</h3>
          <Link className={style.seeall}>
            <div className={style.seee}>
              See all
              <IoIosArrowForward className={style.arrow} />
            </div>
          </Link>
        </div>

       {!loading ? <div className={style.product_container}>
          {products.map((product) => (
            small ? <ProductCardSmall product={product} key={product._id} /> : <ProductCard product={product} key={product._id} />
          ))}
        </div>: <div style={{color: 'grey'}}>Loading ..</div>}
      </div>
    </>
  );
}
