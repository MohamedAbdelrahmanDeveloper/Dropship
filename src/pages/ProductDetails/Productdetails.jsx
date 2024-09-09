import React, { useEffect, useState, useTransition } from "react";

import style from "./Productdetails.module.css";
import { useParams } from "react-router-dom";
import useCountity from "../../hook/countity";
import { getAllProducts, getProduct } from "../../apis/products/product";
import { AddToCart } from "../../apis/products/cart";
import { AddToFavorite } from "../../apis/products/favorite";
import { baseURL } from "../../lib/axios.lib";
import Productsection from "../../Components/productsection/productsection";
import { formatNumber } from "../../lib/formatNumber";
import LoadingPage from "../../Components/Loading/Loading";
import { Badge } from "react-bootstrap";

export default function Productdetails() {
  const { id } = useParams();
  const [isPending, startTransition] = useTransition();
  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(null);
  const [imageView, setImageView] = useState(null)

  const {count, increment, decrement} = useCountity(1)

  useEffect(() => {
    startTransition(() => {
        getAllProducts()
          .then((data) => {
            setProducts(data?.data?.products);
          })
          getProduct(id)
          .then((data) => {
            setProduct(data?.data?.product);
            setImageView(product?.image[0].url)
          });
    });
  }, [id]);
  return (
    <div>
      <div className="container">
        {!isPending ? (product ? 
        <div className={style.productdetails}>
           <div className="row">
            <div className="col-md-2   ">
              <div className={style.smallimgs}>
                {}
                {product.image.map(image => (
                  <img src={baseURL + image.url} key={image._id} className={style.imagsss} onClick={() => setImageView(image.url)} alt="" />
                ))}
              </div>
            </div>

            <div className="col-md-4 ">
              <img src={baseURL + (imageView || product.image[0].url)} className={style.image} alt="" />
            </div>
            <div className="col-md-6 ">
              <div className={style.text}>
                <div className={style.alltext}>
                  <h4>{product.name}</h4>
                  <p>
                    {product.description}
                  </p>

                  <h5>Available</h5>
                  <span className={style.price + ' d-flex gap-1'}>
                      <span>${formatNumber(product.price)}</span>
                      <span> - ${count > 1 && product.price * count}</span>
                  </span>

                  <div className={style.allspans}>
                    <span className=" fw-bold" onClick={increment}>+</span>
                    <span className=" fw-bold">{count}</span>
                    <span className=" fw-bold" onClick={decrement}>-</span>
                  </div>
                </div>

                <div className={style.buttons}>
                  <span className={style.bottomone} onClick={() => AddToCart(product._id, count)}>Add To Cart</span>
                  <span className={style.bottomtwo} onClick={() => AddToFavorite(product._id)}>Add To Favorite</span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.reviews}>
            <table className="table table-borderedless">
              <tbody>
                <tr>
                  <td>Product Title</td>
                  <td>{product.name}</td>
                </tr>
                <tr>
                  <td>Saller</td>
                  <td>{product.saller}</td>
                </tr>

                <tr>
                  <td>weight</td>
                  <td>{product.weight}</td>
                </tr>

                <tr>
                  <td>Brand</td>
                  <td>{product.brand}</td>
                </tr>

                <tr>
                  <td>Color</td>
                  <td>{product.color}</td>
                </tr>

                <tr>
                  <td>The shape</td>
                  <td>{product.theShape}</td>
                </tr>

                <tr>
                  <td>Special features</td>
                  <td>{product.specialFeatures}</td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex gap-2">
              {product.tags.map(tag => {
                return <Badge pill bg="secondary">
                {tag}
              </Badge>
              })}
            </div>
          </div>
        </div> : <h4 className="mt-4" style={{color: 'grey'}}>Not Found product</h4>) : <LoadingPage />}

        {!isPending && products && <Productsection
          products={products}
          title={"You may like it"}
        ></Productsection>}
      </div>
    </div>
  )
}
