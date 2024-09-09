import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

export default function AddProducts() {
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [color, setColor] = useState(null);
  const [Weight, setWeight] = useState(null);
  const [shipping, setShipping] = useState(null);
  const [brand, setBrand] = useState(null);
  const [theShape, setTheShape] = useState(null);
  const [images, setImages] = useState(null);

  const [categories, setCategories] = useState([
    {
      title: 'category 1'
    },
    {
      title: 'category 2'
    },
    {
      title: 'category 3'
    }
  ])


  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add product
      </Button>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title product" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control as={"textarea"} type="text" placeholder="Enter the description"/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter price" min={0}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Color</Form.Label>
                <Form.Control type="text" placeholder="Enter Color"/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>saller</Form.Label>
                <Form.Control type="text" placeholder="Saller" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Weight</Form.Label>
                <Form.Control type="text" placeholder="Enter weight"/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Shipping</Form.Label>
                <Form.Control type="text" placeholder="shipping" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>The Shape</Form.Label>
                <Form.Control type="text" placeholder="Enter the shape"/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text" placeholder="brand" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Category</Form.Label>
                <Form.Select defaultValue="Choose...">
                  {categories.map((category) => <option key={category.title}>{category.title}</option>)}
                </Form.Select>
              </Form.Group>

            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Images</Form.Label>
                <Form.Control type={'file'} accept="image/*" multiple/>
              </Form.Group>

            </Row>

            <Row className="mb-3 px-4">
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
