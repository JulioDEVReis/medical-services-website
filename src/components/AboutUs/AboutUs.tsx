import "./AboutUs.css"
import clinicImage from "../../assets/images/clinic-building.jpg"

function AboutUs() {
  return (
    <section className="aboutus-section" id="aboutus">
      <div className="aboutus-container">
        <div className="aboutus-image">
          <img src={clinicImage} alt="Clinic Building" loading="lazy" />
        </div>
        <div className="aboutus-content">
          <h2>About Us - Clinica Vida</h2>
          <p>
            At Clínica Vida, we are dedicated to providing comprehensive and compassionate healthcare to our community. 
            Our team of experienced doctors and specialists is committed to delivering high-quality medical services across a wide range of specialties, including general medicine, cardiology, pediatrics, and more.
          </p>
          <p>
            Our modern facilities are equipped with the latest technology, ensuring accurate diagnoses and effective treatments. 
            We believe in a patient-centered approach, where every individual is treated with respect, empathy, and personalized care.
          </p>
          <p>
            Whether you need routine check-ups, specialized consultations, or emergency care, Clínica Vida is here to support your health and well-being every step of the way.
          </p>
        </div>  
      </div>     
    </section>
  );
}

export default AboutUs;
