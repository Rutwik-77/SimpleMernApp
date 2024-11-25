/** @format */
import { useAuth } from "../store/auth";
import "./Contact.css";
import { useState } from "react";
const Contact = () => {
  const defaultContactForm = {
    username: "",
    email: "",
    message: "",
  };
  const [contact, setContact] = useState(defaultContactForm);
  const [userdata, setUserdata] = useState(true);
  const { user } = useAuth();

  if (userdata && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserdata(false);
  }

  // handling the input
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({ ...contact, [name]: value });
  };

  // handling the form submission
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        setContact(defaultContactForm);
        alert("Form submitted successfully");
        const data = await Response.json();
        console.log(data);
      } else {
        alert("Failed to submit the form");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className='section-contact'>
        <main>
          <div className='contact-registration'>
            <div className='contact-content container grid grid-two-cols'>
              {/* Registraton image */}
              <div className='contact-image'>
                <img src='images/support.png' alt='' width='400' height='400' />
              </div>
              {/* lets tackle registration form */}
              <div className='section-form'>
                <h1 className='main-heading contact-heading mb-3'>
                  Contact Form
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
                      value={contact.username}
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
                      value={contact.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor='password'>message:</label>
                    <textarea
                      type='text'
                      id='message'
                      name='message'
                      placeholder='Enter your message here'
                      required
                      autoComplete='off'
                      cols='30'
                      rows='10'
                      value={contact.message}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type='submit' className='btn btn-submit'>
                    send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
        {/* <section className="mb-3">
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70948479188!2d73.69780546749206!3d18.524870317633933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1730287756303!5m2!1sen!2sin'
            width='100%'
            height='450'
            style='border:0;'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </section> */}
      </section>
    </>
  );
};

export default Contact;
