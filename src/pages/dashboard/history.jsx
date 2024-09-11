import React, { useEffect, useState } from 'react'
import { Button, Image, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CheckoutProductsOffcanvas from '../../Components/dashboard/checkout/CheckoutProductsOffcanvas';
import { getAllCheckouts } from '../../apis/products/checkouts';
import { formatISODate } from '../../lib/formatDate';

export default function HistoryPage() {
let [checkouts, setChechouts] = useState([])

  useEffect(() => {
    getAllCheckouts().then(res => {
      setChechouts(res?.checkouts)
    })
  }, [])


  
  return (
    <div>
      <div className='bold'>
        History
      </div>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>user</th>
            <th>Products count</th>
            <th>Total</th>
            <th>Time</th>
            <th>products</th>
            {/* <th>Control</th> */}
          </tr>
        </thead>
        <tbody>
          { checkouts?.map((checkout) => {
            return (
              <tr key={checkout._id}>
                <td>{checkout.user.username}
                </td>
                <td>
                  {checkout.products.length}
                </td>
                <td>${checkout.totalAmount}</td>
                <td>{formatISODate(checkout.createdAt)}</td>
                <CheckoutProductsOffcanvas products={checkout.products}/>
                {/* <td className="d-flex gap-2">
                  <Button variant="danger">Delete</Button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  )
}
