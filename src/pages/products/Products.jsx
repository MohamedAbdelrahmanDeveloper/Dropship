import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/Card/ProductCard";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { customAxios } from "../../lib/axios.lib";
import PaginationComponent from "../../Components/pagination/PaginationComponent";

export default function Products() {
  let [products, setproducts] = useState([]);

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
  }, [category, filter]);

  return (
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
  );
}
