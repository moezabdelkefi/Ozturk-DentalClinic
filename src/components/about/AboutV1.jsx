import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const AboutV1 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div id="why-choose-taksim" className="about-style-one-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div
                className="about-style-one bg-dark text-light"
                style={{ backgroundImage: "url(img/shape/7.png)" }}
              >
                <ul className="check-list-item">
                  <li>
                    <h5>Personalized Care at Taksim Medical Clinics</h5>
                    <p>
                      At Taksim Medical Clinics, we offer expert consultations
                      and tailored treatment packages, covering all patient
                      needs from arrival in Turkey to departure.
                    </p>
                  </li>
                  <li>
                    <h5>Transparency in Patient Care</h5>
                    <p>
                      We prioritize transparency, providing patients with all
                      necessary information before arrival and ensuring no
                      changes to the treatment plan.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12">
              <div className="about-style-one">
                <h2 className="title pl-120 pl-md-0 pl-xs-0 mb-70 mb-md-40 mb-xs-30 mt-md-50 mt-xs-30">
                  Why Choose Taksim Clinics <br /> for
                  <strong> Treatment? </strong>{" "}
                </h2>
                <div
                  className="thumb bg-cover"
                  style={{ backgroundImage: "url(img/banner/image22.jpg)" }}
                >
                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="ZCjQzaCYNMw"
                    onClose={() => setOpen(false)}
                  />
                  <Link
                    className="mfp-iframe popup-youtube video-play-button with-text mt-20"
                    onClick={() => setOpen(true)}
                  >
                    <div className="effect"></div>
                    <span>
                      <i className="fa-solid fa-play"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV1;
