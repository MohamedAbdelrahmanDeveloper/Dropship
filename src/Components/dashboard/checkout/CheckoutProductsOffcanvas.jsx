import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

export default function CheckoutProductsOffcanvas({products}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <td>
      <Button variant="primary" onClick={handleShow}>
        View
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="bottom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Products of checkout</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {products}
        </Offcanvas.Body>
      </Offcanvas>
    </td>
  );
}
