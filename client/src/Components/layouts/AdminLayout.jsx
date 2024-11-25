/** @format */

import { NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { RiFilter3Line } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
const AdminLayout = () => {
  return (
    <>
      <header>
        <div className='container'>
          <nav>
            <ul>
              <li>
                <NavLink to='/admin/users'>
                  <FaUser />
                  users
                </NavLink>
              </li>
              <li>
                <NavLink to='/admin/contacts'>
                  <GrContact />
                  contacts
                </NavLink>
              </li>
              <li>
                <NavLink to='/service'>
                  <RiFilter3Line />
                  services
                </NavLink>
              </li>
              <li>
                <NavLink to='/'>
                  <FaHome />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default AdminLayout;
