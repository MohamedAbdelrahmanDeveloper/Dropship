import React, { useEffect, useState } from "react";
import style from "./Explore.module.css";
import plastic from "../../Assets/photoes/plastic (1).png";
import plasticbag from "../../Assets/photoes/plastic bag.png";
import Productsection from "../../Components/productsection/productsection";
import { getAllProducts } from "../../apis/products/product";
export default function Allcategories() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState([])

  useEffect(() => {
    getAllProducts().then(data => {
      setProducts(data.data.products)
    })
    .catch(err=> setError(err))
  }, [])
  return (
    <>
      {/* //////////////////////////////first part///////////////////////////////// */}

      <div className={style.firstpart}>
        <div className={style.overlay}>
          <div className="container">
            <div className={style.text}>
              <h2>Explore</h2>
              <p>
                DiscoverHere’s an example of all the sub-components included in
                a responsive light-themed navbar that automatically collapses at
                the lg (large) breakpoint. new and trending products
              </p>
            </div>
          </div>
          <div className="alltopcategories">
            <div className="container">
              <div className={style.topcategories}>
                <p>Top categories</p>
                <div className={style.alllinks}>
                  <a href="/Allcategories">
                    <div className={style.firstlink}>
                      <div className="col-md-2">
                        <a to="">
                          <img className={style.plastic} src={plastic} alt="" />
                          <span>Plastic sheets</span>
                        </a>
                      </div>
                    </div>
                  </a>

                  <a href="">
                    <div className={style.firstlink}>
                      <div className="col-md-2">
                        <a to="">
                          <img
                            className={style.plastic}
                            src={plasticbag}
                            alt=""
                          />
                          <span>Plastic sheets</span>
                        </a>
                      </div>
                    </div>
                  </a>

                  <a href="">
                    <div className={style.firstlink}>
                      <div className="col-md-2">
                        <a to="">
                          <img className={style.plastic} src={plastic} alt="" />
                          <span>Plastic sheets</span>
                        </a>
                      </div>
                    </div>
                  </a>
                  <a href="">
                    <div className={style.firstlink}>
                      <div className="col-md-2">
                        <a to="">
                          <img
                            className={style.plastic}
                            src={plasticbag}
                            alt=""
                          />
                          <span>Plastic sheets</span>
                        </a>
                      </div>
                    </div>
                  </a>

                  <a href="">
                    <div className={style.firstlink}>
                      <div className="col-md-2">
                        <a to="">
                          <img className={style.plastic} src={plastic} alt="" />
                          <span>Plastic sheets</span>
                        </a>
                      </div>
                    </div>
                  </a>

                  <a href="">
                    <div className={style.firstlink}>
                      <div className="col-md-2">
                        <a to="">
                          <img
                            className={style.plastic}
                            src={plasticbag}
                            alt=""
                          />
                          <span>Plastic sheets</span>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /////////////////////////second part////////////////////////////////////////////////////// */}

      <div className="ssecond">
        <div className="container">
          <div className={style.secondpart}>
            <div className={style.overlay2}>
              <div className={style.textsecondpart}>
                <h3>
                  Get a <span className={style.orangespan2}> 30%</span> discount
                  on your order when <br /> you order more than 5 kilos
                </h3>
                <span className={style.orangespan}> Explore Now </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /////////////////////////third part/////////////////////////////// */}

      <div className={style.partthree}>
        <Productsection products={products} title={"Best Seller"} small />
        <Productsection products={products} title={"On Seller"} small />
        <Productsection products={products} title={"New Arrived"} small />
      </div>
    </>
  );
}
