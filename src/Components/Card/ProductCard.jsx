import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { baseURL } from "../../lib/axios.lib";
import { formatNumber } from "../../lib/formatNumber";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product._id}`} className={"d"}>
      <Card className="card-product" style={{ width: "14rem" }}>
        <Card.Img
          variant="top"
          src={baseURL + product.image[0].url}
          style={{ height: "170px", padding: "4px", borderRadius: '10px 10px 0 0' }}
        />
        <Card.Body>
          <Card.Title className="bold">{product.name}</Card.Title>
          {product.weight && (
            <Card.Text className="">{product.weight}</Card.Text>
          )}
          {product.discount ? (
            <Card.Text className="d-flex gap-1">
              <span className="original-price">${formatNumber(product.price)}</span>
              <span className="green">
                ${formatNumber(product.price - product.discount)}
              </span>
            </Card.Text>
          ) : (
            <Card.Text className="bold" style={{color: '#444'}}>
              ${formatNumber(product.price)}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Link>
  );
}
