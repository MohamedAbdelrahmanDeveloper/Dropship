import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import { customAxios } from "../../lib/axios.lib";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PaginationComponent from "../../Components/pagination/PaginationComponent";

export function UsersPage() {
  let [users, setUsers] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  // جلب جميع المستخدمين
  async function getAllUsers() {
    let { data } = await customAxios.get(
      `/user?pageNumber=${currentPage}&PRODUCT_PER_PAGE=${5}`
    );
    setUsers(data.data.users);
    setTotalProducts(100);
  }

  // حذف مستخدم بناءً على id
  async function deleteUser(id) {
    try {
      await customAxios.delete(`/user/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      console.log(`User with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="p-4">
      <div className="shadow-sm p-2">
        <span>All Users</span>
      </div>

      <Table striped bordered hover className="mt-3 text-center">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>
                <Link
                  to={`/dashboard/users/${user.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {user.username}
                </Link>
              </td>
              <td>{user.email}</td>
              <td>
                <Button variant="danger" onClick={() => deleteUser(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-center">
        <PaginationComponent
          setCurrentPage={setCurrentPage}
          totalProducts={totalProducts}
          productsPerPage={5}
        />
      </div>
    </div>
  );
}

export default UsersPage;
