import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { customAxios } from "../../../lib/axios.lib";
import { addProduct, updateProduct } from "../../../apis/products/product";
import { toast } from "react-toastify";

export default function AddProducts({ product, setRefresh}) {
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
  const [specialFeatures, setSpecialFeatures] = useState(
    product?.specialFeatures || "rvini"
  );
  const [category, setCategory] = useState(product?.category || "");

  const [discount, setDiscount] = useState(product?.discount || "");
  const [tags, setTags] = useState(product?.tags || "");

  const [categories, setCategories] = useState([{ title: "animal" }]);

  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files;

    if (files.length !== 3) {
      toast.error("Please select exactly 3 images.");
      setImages([]);
      return;
    }

    setImages([...files]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!product) {
      if (
        !name ||
        !description ||
        !price ||
        !color ||
        !weight ||
        !shipping ||
        !brand ||
        !theShape ||
        !saller ||
        !category ||
        images.length !== 3
      ) {
        toast.error("Please fill all fields and upload exactly 3 images.");
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
    formData.append("specialFeatures", specialFeatures);
    formData.append("discount", discount);

    if (!product) {
      const tagsArray = tags.trim().split(/\s+/);
      tagsArray.forEach((tag, index) => {
        formData.append(`tags[${index}]`, tag);
      });
    }

    if (!product) {
      images.forEach((image) => {
        formData.append("images", image);
      });
    }

    try {
      if (product) {
        updateProduct(product._id, {
          name: name,
          description: description,
          price: parseInt(price),
          saller: saller,
          weight: weight,
          brand: brand,
          color: color,
          theShape: theShape,
          specialFeatures: specialFeatures,
          shipping: shipping,
          category: category,
          discount: parseInt(0),
        });
        setRefresh(e => {
          return !e
        })
      } else {
        const response = await addProduct(formData);
      }
      toast.success("Product added successfully!")
      setRefresh(e => {
        return !e
      })
    } catch (error) {
      toast.error("Error adding product. Please try again.")
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
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fullscreen="xxl-down"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {product ? "Edit product" : "Add product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Title {name}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title product"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
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
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
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
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Color"
                  onChange={(e) => setColor(e.target.value)}
                  value={color}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Saller</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Saller"
                  onChange={(e) => setSaller(e.target.value)}
                  value={saller}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter weight"
                  onChange={(e) => setWeight(e.target.value)}
                  value={weight}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Shipping</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Shipping"
                  onChange={(e) => setShipping(e.target.value)}
                  value={shipping}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>The Shape</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the shape"
                  onChange={(e) => setTheShape(e.target.value)}
                  value={theShape}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Brand"
                  onChange={(e) => setBrand(e.target.value)}
                  value={brand}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
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
                  onChange={(e) => setDiscount(e.target.value)}
                  value={discount}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Special Features</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter special features"
                  onChange={(e) => setSpecialFeatures(e.target.value)}
                  value={specialFeatures}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
            {!product &&
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Images</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                />
              </Form.Group>
            }
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Tags</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter tags, separated by spaces"
                  onChange={(e) => setTags(e.target.value)}
                  value={tags}
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
