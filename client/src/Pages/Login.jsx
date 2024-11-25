/** @format */
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
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
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      const res_data = await response.json();
      console.log("res from server", res_data);
      // Store the token in local storage for further use in authenticated requests
      storetokeninLS(res_data.token);
      toast.success("Login Successfull");
      setUser({ email: "", password: "" });
      navigate("/");
    } else {
      toast.error("invalid credentails");
    }
    console.log(response);
  };

  return (
    <>
      <section>
        <main>
          <div className='section-registration'>
            <div className='container grid grid-two-cols'>
              {/* Registraton image */}
              <div className='registration-image'>
                <img src='images/login.png' alt='' width='400' height='400' />
              </div>
              {/* lets tackle registration form */}
              <div className='registration-form'>
                <h1 className='main-heading login-heading mb-3'>Login Form</h1>
                <br />
                <form onSubmit={handlesubmit}>
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
                    Login Now
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

export default Login;
