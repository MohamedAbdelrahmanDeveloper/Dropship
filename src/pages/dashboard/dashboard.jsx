import React from "react";
import { Button, Card, Col, Container, Image, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <div className="p-4">
      {/* <Container> */}
      <Row xs={2} md={4} className="mb-4">
        <Col>
          <Card body>
            <Card.Title className="bold primary-color">27,954</Card.Title>
            <Card.Title>Products</Card.Title>
          </Card>
        </Col>
        <Col>
          <Card body>
            <Card.Title className="bold primary-color">7,834</Card.Title>
            <Card.Title>Users</Card.Title>
          </Card>
        </Col>
        <Col className="mt-4 mt-md-0">
          <Card body>
            <Card.Title className="bold primary-color">10</Card.Title>
            <Card.Title>Categories</Card.Title>
          </Card>
        </Col>
        <Col className="mt-4 mt-md-0">
          <Card body>
            <Card.Title className="bold primary-color">686,594</Card.Title>
            <Card.Title>Checkouts</Card.Title>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card body>
            <Card.Title className="bold primary-color">29</Card.Title>
            <Card.Title>On Sale</Card.Title>
          </Card>
        </Col>
        <Col>
          <Card body>
            <Card.Title className="bold primary-color">45</Card.Title>
            <Card.Title>Best Seller</Card.Title>
          </Card>
        </Col>
        <Col>
          <Card body>
            <Card.Title className="bold primary-color">10</Card.Title>
            <Card.Title>This week's products</Card.Title>
          </Card>
        </Col>
        {/* <Col>
          <Card body>
            <Card.Title className="bold primary-color">686,594</Card.Title>
            <Card.Title>Checkouts</Card.Title>
          </Card>
        </Col> */}
      </Row>
      {/* </Container> */}

      {/* <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>description</th>
            <th>Price</th>
            <th>Checkouts</th>
            <th>Created at</th>
            <th>Created at</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((user) => {
            return (
              <tr key={user}>
                <td>
                  <Image
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_191d6310e08%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_191d6310e08%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2259.9296875%22%20y%3D%2294.5%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    width={"40px"}
                    height={"40px"}
                  />
                </td>
                <td>
                  <Link to={`/product/${"id"}`} style={{color: '#000'}}>Mohamed {user}</Link>
                </td>
                <td>email@example.com</td>
                <td>50</td>
                <td>50</td>
                <td>{new Date().toDateString()}</td>
                <td>{new Date().toDateString()}</td>
                <td className="d-flex gap-2">
                  <Button>update</Button>
                  <Button>update images</Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table> */}
    </div>
  );
}
