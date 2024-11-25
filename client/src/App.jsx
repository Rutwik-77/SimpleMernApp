/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Service from "./Pages/Service";
import Navbar from "./Components/Navbar";
import Error from "./Pages/Error";
import Footer from "./Components/Footer";
import Logout from "./Pages/Logout";
import AdminLayout from "./Components/layouts/AdminLayout";
import AdminUsers from "./Pages/AdminUsers";
import AdminContacts from "./Pages/AdminContacts";
import EditUser from "./Pages/EditUser";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='users' element={<AdminUsers />} />
            <Route path='contacts' element={<AdminContacts />} />
            <Route path='/admin/users/:id/edit' element={<EditUser />} />
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};

export default App;
