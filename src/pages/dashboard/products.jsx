import React, { useEffect, useState } from "react";
import AddProducts from "../../Components/dashboard/products/addProducts";
import { Button, Image, Pagination, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProducts } from "../../apis/products/product";
import { formatISODate } from "../../lib/formatDate";
import { baseURL } from "../../lib/axios.lib";
import UpdateImageProduct from "../../Components/dashboard/products/UpdateImageProduct";
import PaginationComponent from "../../Components/pagination/PaginationComponent";

export default function DashboardProducts() {
  const [refresh, setRefresh] = useState(false)
  const [products, setProducts] = useState()

  const [currentPage, setCurrentPage] = useState(1); 
  const [totalProducts, setTotalProducts] = useState(0); 

  useEffect(() => {
    getAllProducts(`pageNumber=${currentPage}&PRODUCT_PER_PAGE=${10}`).then(data=> {
      setProducts(data?.data?.products);
      setTotalProducts(11)
    })
  }, [refresh, currentPage])
  
  return (
    <div className="p-4">
      <div className="shadow-sm p-2 d-flex justify-content-between align-items-center">
        <span className="bold">Products</span>
        <AddProducts setRefresh={setRefresh}/>
      </div>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>description</th>
            <th>Price</th>
            <th>Checkouts</th>
            <th>Created at</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map((product) => {
            return (
              <tr key={product}>
                <td>
                  <Image
                    src={baseURL + product.image[0].url}
                    width={"40px"}
                    height={"40px"}
                  />
                </td>
                <td>
                  <Link to={`/product/${product._id}`} style={{color: '#000'}}>{product.name}</Link>
                </td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>50</td>
                <td>{formatISODate(product.createdAt)}</td>
                <td className="d-flex gap-2">
                  <AddProducts product={product} setRefresh={setRefresh}/>
                  <UpdateImageProduct product={product} setRefresh={setRefresh}/>
                  <Button onClick={() => {
                    deleteProduct(product._id).then(e=> {
                      setRefresh(!refresh)
                    })
                  }} variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center">
        <PaginationComponent
            setCurrentPage={setCurrentPage}
            totalProducts={totalProducts}
            productsPerPage={10}
          />
      </div>
      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Checkouts</th>
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
                    roundedCircle
                  />
                </td>
                <td>Mohamed {user}</td>
                <td>emial@example.com</td>
                <td>50</td>
                <td>{new Date().toDateString()}</td>
                <td>
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
