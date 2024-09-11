import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/Card/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import plasticbag from "../../Assets/photoes/plastic bag.png";
import { customAxios } from "../../lib/axios.lib";
import PaginationComponent from "../../Components/pagination/PaginationComponent";
import style from './products.module.css'
import styles from "../../Components/productsection/productsection.module.css"
import { getAllCategory } from "../../apis/products/category";

export default function Products() {
  let [products, setproducts] = useState([]);
  let [categories, setCategories] = useState(null);

  const [currentPage, setCurrentPage] = useState(1); 
  const [totalProducts, setTotalProducts] = useState(0); 

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const filter = query.get("filter");
  const category = query.get("category");

  async function getallproducts() {
    let { data } = await customAxios.get(`/product?${(category && "category=" + category + `&pageNumber=${currentPage}&PRODUCT_PER_PAGE=${20}`) || filter && filter + '=1'}`);
    setproducts(data.data.products);
    setTotalProducts(50)
  }
  useEffect(() => {
    getallproducts();
    getAllCategory().then(res => {
      setCategories(res.data.categories)
    })
  }, [category, filter]);

  return (
    <div>
       <div className={style.firstpart}>
        <div className={style.overlay}>
          <div className="container">
            <div className={style.text}>
              <h2>{category || 'Products'}</h2>
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
                <div className={  ' ' + styles.product_container} >
                  {categories && categories.map((category) => {
                  return <Link to={`/products?category=${category.name}`} key={category._id}>
                    <div className={style.firstlink}>
                      <div className="col-md-2">
                        <a to="">
                          <img
                            className={style.plastic}
                            src={plasticbag}
                            alt=""
                          />
                          <span>{category.name}</span>
                        </a>
                      </div>
                    </div>
                  </Link>
                  })
                  }


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


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
      <div className={style.partthree}>
        <Container>
          <Row className="gap-4">
            {products.map((product, index) => (
              <Col xs={6} lg={2} className="mb-4" key={index}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
          <div className="d-flex justify-content-center mt-4">
            <PaginationComponent
                setCurrentPage={setCurrentPage}
                totalProducts={totalProducts}
                productsPerPage={20}
              />
          </div>
        </Container>
      </div>
    </div>
  );
}
