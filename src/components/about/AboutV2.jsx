import React from "react";

const AboutV2 = () => {
  return (
    <>
      <div id="about-us" className="about-style-two-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 about-style-two">
              <div className="about-two-thumb">
                <img src="/img/thumb/about.jpeg" alt="Image Not Found" />
                <div className="experience">
                  <h2>
                    <strong>18</strong> Years Experience
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 about-style-two pl-50 pl-md-15 pl-xs-15 mt-60 mt-xs-40">
              <div className="about-two-info">
                <h4 className="sub-title">About Us</h4>
                <h2 className="title">
                  Why Choose Taksim <br /> Clinics for Treatment?
                </h2>
                <p>
                  At Taksim Medical Clinics, we offer you direct consultations
                  from a medical team specialized in the relevant health
                  condition, in addition to a variety of treatment packages that
                  include all the necessary services for the patient from the
                  moment he arrives in Turkey until his departure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV2;
