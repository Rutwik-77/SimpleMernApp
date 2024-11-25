/** @format */
import "./Error.css";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div id='error-page'>
      <h1>404</h1>
      <p>Sorry, something went wrong, page not found</p>
      <div className='btns'>
          <NavLink to='/' className="btn1">Return to Homepage</NavLink>
          <NavLink to='/contact' className="btn2">Report Problem</NavLink>
      </div>
    </div>
  );
};

export default Error;
