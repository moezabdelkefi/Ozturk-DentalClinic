import React from "react";
import SocialShare2 from "../others/SocialShare2";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-style-one-info">
        <div className="mb-40">
          <h2>Need consultation?</h2>
          <p>
            At Taksim Medical Clinics, we offer you direct consultations from a
            medical team specialized in the relevant health condition, in
            addition to a variety of treatment packages that include all the
            necessary services for the patient from the moment he arrives in
            Turkey until his departure.
          </p>
        </div>
        <ul className="contact-address">
          <li className="wow fadeInUp">
            <div className="content">
              <h4 className="title">Phone</h4>
              <a href="tel:+4733378901">+905439086696</a>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="300ms">
            <div className="info">
              <h4 className="title">Location</h4>
              <p>
                14/1 Mete Road Ayanoğlu business center - Gümüşsuyu . (Taksim
                Square) Beyoğlu - İstanbul
              </p>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="500ms">
            <div className="info">
              <h4 className="title">Official Email</h4>
              <a href="mailto:info@taksimclinics.com">info@taksimclinics.com</a>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="700ms">
            <div className="info">
              <h4 className="title">Follow Us</h4>
              <ul className="social-link">
                <SocialShare2 />
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
