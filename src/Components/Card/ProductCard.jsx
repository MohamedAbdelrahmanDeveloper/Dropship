import React from "react";
import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { baseURL } from "../../lib/axios.lib";
import { formatNumber } from "../../lib/formatNumber";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product._id}`} className={"d"}>
      <Card className="card-product" style={{ width: "14rem", position: 'relative'}}>
        {product.discount && <Badge bg="success" style={{position: 'absolute', top: '5px', right: '5px'}}>{product.discount}%</Badge>}
        <Card.Img
          variant="top"
          src={baseURL + product.image[0].url}
          style={{ height: "170px", padding: "4px", borderRadius: '10px 10px 0 0' }}
        />
        <Card.Body>
          <Card.Title className="bold" style={{color: '#555'}}>{product.name}</Card.Title>
          {/* {product.weight && (
            <Card.Text className="">{product.weight}</Card.Text>
          )} */}
          {product.discount ? (
            <Card.Text className="d-flex justify-content-between" style={{fontSize: '14px'}}>
              <span className="original-price">${formatNumber(product.price)}</span>
              {product.discount && <span className="green">
                ${formatNumber(product.currentPrice)} 
              </span>}
            </Card.Text>
          ) : (
            <Card.Text className="bold" style={{color: '#444'}}>
              {/* ${formatNumber(product.currentPrice)} */}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Link>
  );
}
