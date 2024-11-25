/** @format */

const Home = () => {
  return (
    <>
      <main>
        <section className='section-hero'>
          <div className='container grid grid-two-cols'>
            <div className='hero-content'>
              <p>
                A full-stack MERN application with authentication and real-time
                updates.
              </p>
              <h1 className='hero-subheading'>
                Empower Your Development Journey
              </h1>
              <p>
                MernApp is designed to streamline your development process by
                integrating the best technologies in a single platform. With
                robust authentication mechanisms, users can securely log in and
                access personalized content. The application also features
                real-time updates, ensuring that users stay informed with the
                latest changes and notifications as they happen.
              </p>
              <div className='btn btn-grp'></div>
              <a href='/contact'>
                <button className='btn'>Connect Now</button>
              </a>
              <a href='/service'>
                <button className='btn secondary-btn'>Learn More</button>
              </a>
            </div>

            <div className='hero-image'>
              <img src='/images/home.png' alt='' width='400' height='400' />
            </div>
          </div>
        </section>
      </main>
      <section className='section-analytics'>
        <div className='container grid grid-four-cols'>
          <div className='div1'>
            <h2>80+</h2>
            <p>Registered Comapanies</p>
          </div>
          <div className='div1'>
            <h2>10,000+</h2>
            <p>Happy Clients</p>
          </div>
          <div className='div1'>
            <h2>500+</h2>
            <p>Talented Developers</p>
          </div>
          <div className='div1'>
            <h2>24/7</h2>
            <p>Service</p>
          </div>
        </div>
      </section>
      <section className='section-hero'>
        <div className='container grid grid-two-cols'>
          <div className='hero-image'>
            <img src='/images/design.png' alt='' width='400' height='400' />
          </div>
          <div className='hero-content'>
            <p>we are her to here to help You</p>
            <h1 className='hero-subheading'>Get Started today</h1>
            <p>
              MernApp is designed to streamline your development process by
              integrating the best technologies in a single platform. With
              robust authentication mechanisms, users can securely log in and
              access personalized content. The application also features
              real-time updates, ensuring that users stay informed with the
              latest changes and notifications as they happen.
            </p>
            <div className='btn btn-grp'>
              <a href='/contact'>
                <button className='btn'>Connect Now</button>
              </a>
              <a href='/service'>
                <button className='btn secondary-btn'>Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
