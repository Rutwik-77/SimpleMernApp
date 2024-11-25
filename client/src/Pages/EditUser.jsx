/** @format */

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./EditUser.css";
import { toast } from "react-toastify";

const EditUser = () => {
  // const { id } = useParams(); // Get the user ID from the URL
  const { authorization } = useAuth();
  const [user, setUser] = useState({ username: "", email: "", phone: "" });
  const navigate = useNavigate();
  const params = useParams();

  // Fetch user data by ID
  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorization,
          },
        }
      );
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH", // Change UPDATE to PUT
          headers: {
            Authorization: authorization,
            "Content-Type": "application/json", // Add Content-Type header
          },
          body: JSON.stringify(user),
        }
      );
      if (response.ok) {
        navigate("/admin/users"); // Redirect to the users list after a successful update
        toast.success("Success");
      } else {
        // console.error("Failed to update user.");
        toast.error("Failed to update user.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // to update the data dynamically


  return (
    <div className='edit-user-container'>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='username'
            value={user.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type='text'
            name='phone'
            value={user.phone}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type='submit'>Update User</button>
      </form>
    </div>
  );
};

export default EditUser;
