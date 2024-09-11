import React, { useState } from "react";
import { Button, Image, Offcanvas, Table } from "react-bootstrap";
import { formatISODate } from "../../../lib/formatDate";
import { Link } from "react-router-dom";
import { baseURL } from "../../../lib/axios.lib";
import './products-offcanvas.css'

export default function CheckoutProductsOffcanvas({products}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <td className="products-offcanvas">
      <Button variant="primary" size="lg" onClick={handleShow}>
        View
      </Button>
      <Offcanvas show={show} scroll={false} className={'products-offcanvas'} onHide={handleClose} placement="bottom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Products of checkout</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >

          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Price At Purchase</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              { products?.map((product) => {
                return product && (
                  <tr key={product._id}>
                    <td>
                      <Link to={`/product/${product?._id}`} className="primary-color">
                        {product?.product != null && <Image
                          src={baseURL + product?.product.image[0]?.url}
                          width={"40px"}
                          height={"40px"}
                        />}
                        <span className="ms-2">{product.product != null ? product.product.name: ''}</span>
                      </Link>
                    </td>
                    <td>{product.product?.currentPrice}</td>
                    <td>{product?.priceAtPurchase}</td>
                    <td>{product?.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </td>
  );
}
