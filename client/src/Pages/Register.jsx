/** @format */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const { storetokeninLS } = useAuth();

  // handling the input
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  // handling the form submission
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const response = await fetch(`http://localhost:5000/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    if (user.password.length < 10) {
      toast.warning("Password must be at least 10 characters long.");
      return;
    }
    const res_data = await response.json();
    console.log("res from server", res_data.extradetails);
    // console.log(response);
    if (response.ok) {
      // Store the token in local storage for further use in authenticated requests
      storetokeninLS(res_data.token);

      toast.success("Registration Successfull");
      setUser({ username: "", email: "", phone: "", password: "" });
      navigate("/"); // Redirect to home page after successful registration
    } else {
      toast.error(res_data.extradetails ? res_data. extradetails:res_data.message);

      // alert("Registration failed");
    }
  };

  return (
    <>
      <section>
        <main>
          <div className='section-registration'>
            <div className='container grid grid-two-cols'>
              {/* Registraton image */}
              <div className='registration-image'>
                <img
                  src='images/register.png'
                  alt=''
                  width='400'
                  height='400'
                />
              </div>
              {/* lets tackle registration form */}
              <div className='registration-form'>
                <h1 className='main-heading register-heading mb-3'>
                  Registration Form
                </h1>
                <br />
                <form onSubmit={handlesubmit}>
                  <div>
                    <label htmlFor='username'>username:</label>
                    <input
                      type='text'
                      id='username'
                      name='username'
                      placeholder='Enter your Username'
                      required
                      autoComplete='off'
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor='email'>email:</label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      placeholder='Enter your Email'
                      required
                      autoComplete='off'
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor='phone'>phone:</label>
                    <input
                      type='number'
                      id='phone'
                      name='phone'
                      placeholder='Enter your Phone number'
                      required
                      autoComplete='off'
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor='password'>password:</label>
                    <input
                      type='password'
                      id='pasword'
                      name='password'
                      placeholder='Enter your password'
                      required
                      autoComplete='off'
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type='submit' className='btn btn-submit'>
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
