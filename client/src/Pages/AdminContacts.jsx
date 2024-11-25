import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
// import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./AdminContact.css";
const AdminContacts = () => {
  const [users, setUsers] = useState([]);
  const { authorization } = useAuth();


  const getAllContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contact", {
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

  const deletecontact = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/admin/contact/delete/${id}`,
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
      getAllContactsData();
      toast.success("Contact deleted successfully")
    }

    // console.log(id);
  };

  useEffect(() => {
    getAllContactsData();
  }, []);

  return (
    <>
      <section className='admin-contact-section'>
        <div className='container-contact'>
          <h1>Contacts Message</h1>
        </div>

        <div className='container admin-contact'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Date</th>
                <th>Remove</th>

              </tr>
            </thead>
            <tbody>
              {users.map((curruser, index) => {
                return (
                  <tr key={index}>
                    <td>{curruser.username}</td>
                    <td>{curruser.email}</td>
                    <td>{curruser.message}</td>
                    <td>{curruser.date}</td>

                   
                    <td>
                      <button onClick={() => deletecontact(curruser._id)}>
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
}

export default AdminContacts