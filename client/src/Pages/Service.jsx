/** @format */
import "./services.css";
import { useAuth } from "../store/auth";

const Service = () => {
  const { services } = useAuth();
  return (
    <section className='section-services'>
      <div className='section-container'>
        <div className='main-heading-section'>Our Services</div>
      </div>
      <div className='container'>
        {services.map((currEle, index) => {
          const { price, description, provider, service } = currEle;
          return (
            <div className='card' key={index}>
              <div className='card-img'>
                <img
                  src='/images/design.png'
                  alt='our services info'
                  width='200'
                  height='200'
                />
              </div>
              <div className='card-details'>
                <div className='grid grid-two-cols'>
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            </div>
          );
        })}

        {/* <div className='card'>
              <div className='card-img'>
                <img
                  src='/images/design.png'
                  alt='our services info'
                  width='200'
                  height='200'
                />
              </div>
              <div className='card-details'>
                <div className='grid grid-two-cols'>
                  <p>provider</p>
                  <p>price</p>
                </div>
                <h2>service</h2>
                <p>description</p>
              </div>
            </div> */}
      </div>
    </section>
  );
};

export default Service;
