import "./AboutUs.css"
import clinicImage from "../../assets/images/clinic-building.jpg"
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <section className="aboutus-section" id="aboutus">
      <div className="aboutus-container">
        <div className="aboutus-image">
          <img src={clinicImage} alt="Clinic Building" loading="lazy" />
        </div>
        <div className="aboutus-content">
          <h2>{t('aboutUs.title')}</h2>
          <p>{t('aboutUs.content.paragraph1')}</p>
          <p>{t('aboutUs.content.paragraph2')}</p>
          <p>{t('aboutUs.content.paragraph3')}</p>
        </div>  
      </div>     
    </section>
  );
}

export default AboutUs;
