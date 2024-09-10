import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { customAxios } from "../../../lib/axios.lib";
import { addProduct, updateProduct } from "../../../apis/products/product";

export default function AddProducts({product}) {
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState(product?.name || "");
  const [description, setDescription] = useState(product?.description || "");
  const [price, setPrice] = useState(product?.price || "");
  const [color, setColor] = useState(product?.color || "");
  const [weight, setWeight] = useState(product?.weight || "");
  const [shipping, setShipping] = useState(product?.shipping || "");
  const [brand, setBrand] = useState(product?.brand || "");
  const [theShape, setTheShape] = useState(product?.theShape || "");
  const [saller, setSaller] = useState(product?.saller || ""); 
  const [category, setCategory] = useState(product?.category || ""); 
  console.log(category);
  
  const [discount, setDiscount] = useState(product?.discount || ""); 
  const [tags, setTags] = useState(product?.tags || ""); 

  const [categories, setCategories] = useState([
    { title: "animal" }
  ]);

  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleImageUpload = (event) => {
    const files = event.target.files;

    if (files.length !== 3) {
      setError("Please select exactly 3 images.");
      setImages([]); 
      return;
    }

    setError(""); 
    setImages([...files]); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!product) {
      if (!name || !description || !price || !color || !weight || !shipping || !brand || !theShape || !saller || !category || images.length !== 3) {
        setError("Please fill all fields and upload exactly 3 images.");
        return;
      }
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("color", color);
    formData.append("weight", weight);
    formData.append("shipping", shipping);
    formData.append("category", category);
    formData.append("saller", saller);
    formData.append("brand", brand);
    formData.append("theShape", theShape);
    formData.append("discount", discount); 

    const tagsArray = tags.trim().split(/\s+/);
    
    tagsArray.forEach((tag, index) => {
      formData.append(`tags[${index}]`, tag);
    });

    if (!product) {
      images.forEach((image) => {
        formData.append("images", image);
      });
    }

    try {
      if (product) {
        updateProduct(product._id, 
          {
              "name": name,
              "description": description,
              "price": price,
              "saller": saller,
              "weight": weight,
              "brand": brand,
              "color": color,
              "theShape": theShape,
              // "specialFeatures": specialFeatures,
              "shipping": shipping ,
              "tags": tags,
              "category": category
              //  "discount":2
             }
      )
        
        // const response = await customAxios.post("/product", formData, {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // });
      }
      else {
        const response = await addProduct(formData)
      }
      setSuccess("Product added successfully!");
      setError("");
    } catch (error) {
      setError("Error adding product. Please try again.");
      setSuccess("");
    }
  };

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        {product ? "Edit product" : "Add product"}
      </Button>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{product ? "Edit product" : "Add product"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title product"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="Enter the description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter price"
                  min={0}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Saller</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Saller"
                  value={saller}
                  onChange={(e) => setSaller(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Shipping</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Shipping"
                  value={shipping}
                  onChange={(e) => setShipping(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>The Shape</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the shape"
                  value={theShape}
                  onChange={(e) => setTheShape(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Choose...</option>
                  {categories.map((category) => (
                    <option key={category.title} value={category.title}>
                      {category.title}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Discount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter discount"
                  min={0}
                  max={100}
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Tags</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter tags, separated by spaces"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Images</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                />
              </Form.Group>
            </Row>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

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
