import React from "react";

const AboutV2 = () => {
  return (
    <>
      <div id="about-us" className="about-style-two-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 about-style-two">
              <div className="about-two-thumb">
                <img src="/img/thumb/about.webp" alt="Image Not Found" />
                <div className="experience">
                  <h2>
                    Over
                    <strong>15</strong> Years Experience
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 about-style-two pl-50 pl-md-15 pl-xs-15 mt-xs-40">
              <div className="about-two-info">
                <h4 className="sub-title">About Us</h4>
                <h2 className="title">A leading visionary in dental care.</h2>
                <p>
                  Committed to providing the latest dental solutions to ensure a
                  healthy and lasting smile for every patient.
                </p>
                <p>
                  Our clinic is licensed by all medical authorities of the
                  Turkish government, and all our doctors have graduated from
                  the world’s top universities.
                </p>
                <h2 className="title">
                  Our clinic is licensed by the Turkish Ministry of Health.
                </h2>
                <p>
                  Our clinic is licensed by all medical authorities of the
                  Turkish government, and all our doctors have graduated from
                  the world’s top universities.
                </p>
                <p>
                  What sets us apart from others? We are doctors, not a
                  marketing agency. From the moment you contact us, coordination
                  will be directly handled by your doctor who will be treating
                  you.
                </p>
                <div className="image-container">
                  <img src="/img/minlogo/minlogo.webp" alt="Image 1" />
                  <img src="/img/minlogo/minlogo2.webp" alt="Image 2" />
                  <img src="/img/minlogo/minlogo3.webp" alt="Image 3" />
                  <img src="/img/minlogo/minlogo4.webp" alt="Image 4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV2;
