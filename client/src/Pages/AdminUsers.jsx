/** @format */

import { useEffect, useState } from "react";
import "./Adminusers.css";

import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { authorization } = useAuth();
  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      });
      const data = await response.json();
      console.log(`users ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // delete the user om delete buttun

  const deleteuser = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/admin/users/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: authorization,
        },
      }
    );
    const data = await response.json();
    console.log(`users after delete  ${data}`);
    if (response.ok) {
      getAllUsersData();
      toast.success("User deleted successfully")
    }

    console.log(id);
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <section className='admin-users-section'>
        <div className='container-user'>
          <h1>Admin Users Data</h1>
        </div>

        <div className='container admin-users'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curruser, index) => {
                return (
                  <tr key={index}>
                    <td>{curruser.username}</td>
                    <td>{curruser.email}</td>
                    <td>{curruser.phone}</td>
                    <td>
                      <Link to={`/admin/users/${curruser._id}/edit`}>Edit</Link>
                    </td>
                    <td>
                      <button onClick={() => deleteuser(curruser._id)}>
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminUsers;
