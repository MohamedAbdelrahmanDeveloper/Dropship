import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { baseURL } from "../../lib/axios.lib";
import { formatNumber } from "../../lib/formatNumber";

export default function ProductCardSmall({ product }) {
  return (
    <Link to={`/product/${product._id}`} className={"d"}>
      <Card className="card-product text-center" style={{ width: "14rem" }}>
        <Card.Img
          variant="top"
          src={'http://localhost:3000/static/media/unsplash_reEySFadyJQ.a744db83dc3ebce07d9e.png'}
        //   src={baseURL + product.image[0].url}
          style={{ height: "200px", padding: "4px", borderRadius: '10px 10px 0 0' }}
        />
        <Card.Body>
          <Card.Title className="bold">{product.name}</Card.Title>
          {product.weight && (
            <Card.Text className="">{product.weight}</Card.Text>
          )}
          {product.discount ? (
            <Card.Text className="d-flex mx-4 justify-content-around">
              <span className="primary-color bold">
                ${formatNumber(product.price - product.discount)}
              </span>
              <span className="original-price">${formatNumber(product.price)}</span>
            </Card.Text>
          ) : (
            <Card.Text className="primary-color bold">
              ${formatNumber(product.price)}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Link>
  );
}
