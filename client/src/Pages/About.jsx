/** @format */

import "./about.css";
import { useAuth } from "../store/auth";
const About = () => {
  const { user } = useAuth();
  return (
    <section>
      <div className='container grid grid-two-cols'>
        <div className='abt-left'>
          {/* <p>Welcome, Rutwik Sawarkar</p> */}
          <p>Welcome, {user?.username || "Guest"}</p>
          <h2>Why choose us</h2>
          <p>
            Our team consists of experienced developers who specialize in MERN
            stack technologies, ensuring high-quality solutions.
          </p>
          <p>
            <strong>Expertise:</strong>
            <br />
            - Our developers have extensive experience in JavaScript, MongoDB,
            Express.js, React, and Node.js.
            <br />- We stay updated with the latest developments in the MERN
            ecosystem to provide cutting-edge solutions.
          </p>

          <p>
            <strong>Scalability:</strong>
            <br />
            - Our applications are designed to handle increased loads without
            sacrificing performance.
            <br />- We implement best practices in architecture to ensure your
            app can grow as your user base expands.
          </p>

          <p>
            <strong>Customer-Centric Approach:</strong>
            <br />
            - We conduct thorough consultations to understand your business
            needs and objectives.
            <br />- Our iterative development process allows for regular
            feedback and adjustments based on your input.
          </p>

          <p>
            <strong>Rapid Development:</strong>
            <br />
            - The MERN stack enables us to build applications quickly, allowing
            you to launch sooner.
            <br />- We utilize reusable components and libraries to speed up the
            development process.
          </p>

          <p>
            <strong>Community Support:</strong>
            <br />
            - Being part of the MERN ecosystem gives us access to a large
            community of developers and resources.
            <br />- This network allows us to solve problems quickly and
            implement the latest best practices.
          </p>

          <p>
            <strong>Cost-Effective Solutions:</strong>
            <br />
            - Our efficient development process reduces overhead costs, allowing
            us to offer competitive pricing.
            <br />- We focus on delivering value, ensuring that your investment
            yields significant returns.
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

        <div className='abt-right'>
          <img src='images/about.png' alt='Mern App' width='400' height='400' />
        </div>
      </div>
    </section>
  );
};

export default About;
