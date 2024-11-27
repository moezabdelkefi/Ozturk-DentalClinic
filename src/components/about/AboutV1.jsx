import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { HashLink as Link } from "react-router-hash-link";

const AboutV1 = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <>
      <div
        id="why-choose-taksim"
        className="about-style-one-area default-padding"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div
                className="about-style-one bg-dark text-light"
                style={{ backgroundImage: "url(img/shape/7.png)" }}
              >
                <ul className="check-list-item">
                  <li>
                    <h5>Vision</h5>
                    <p>
                      Devenir une clinique dentaire de référence, offrant des
                      soins innovants et de qualité pour assurer le bien-être
                      bucco-dentaire durable de nos patients.
                    </p>
                  </li>
                  <li>
                    <h5>Mission</h5>
                    <p>
                      Fournir des soins dentaires d'excellence avec des
                      technologies avancées, une approche bienveillante, et des
                      traitements personnalisés pour améliorer la santé et le
                      bien-être de nos patients.
                    </p>
                  </li>
                </ul>
                <div className="d-flex justify-content-center">
                  <div className="button">
                    <Link
                      className="btn btn-md btn-gradient animation mt-35"
                      to="#contact-us"
                    >
                      Sourire Parfait? Commencez Ici
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12">
              <div className="about-style-one">
                <h2 className="title pl-120 pl-md-0 pl-xs-0 mb-70 mb-md-40 mb-xs-30 mt-md-50 mt-xs-30">
                  Prendre soin de tous
                  <br />
                  <strong> les besoins dentaires de votre famille.</strong>{" "}
                </h2>
                <div
                  className="thumb bg-cover"
                  style={{ backgroundImage: "url(img/banner/image22.webp)" }}
                >
                  <Modal
                    isOpen={isOpen}
                    onRequestClose={() => setOpen(false)}
                    contentLabel="Local Video"
                    style={{
                      content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        backgroundColor: "transparent",
                        border: "none",
                        borderRadius: "10px",
                        transform: "translate(-50%, -50%)",
                        width: "90%",
                        maxWidth: "800px",
                        zIndex: "1000",
                      },
                      overlay: {
                        zIndex: "1000",
                      },
                    }}
                  >
                    <video width="100%" controls autoPlay>
                      <source src="/img/video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Modal>
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
