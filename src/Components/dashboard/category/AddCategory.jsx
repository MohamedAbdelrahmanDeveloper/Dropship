import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { addCategory } from "../../../apis/products/category";

export default function AddCategoryComponent({ setRefresh}) {
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
    const response = await addCategory({
        name
    }).then(res=> {
        setRefresh(e => {
        return !e
        })
    });
    } catch (error) {
      toast.error("Error adding category. Please try again.")
    }
  };

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
       Add Category
      </Button>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fullscreen="xxl-down"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Title {name}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </Form.Group>
            </Row>

            

           
            <Row className="mb-3 px-4">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
