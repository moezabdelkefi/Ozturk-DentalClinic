import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import SocialShare from "../others/SocialShare";
import { toast } from "react-toastify";

const FooterV1 = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Thanks for your Email");
  };

  return (
    <>
      <footer
        className="bg-dark text-light"
        style={{ backgroundImage: "url(/img/shape/5.png)" }}
      >
        <div className="container">
          <div className="f-items default-padding-bottom pt-70 pt-xs-0">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-item mt-50">
                <div className="footer-animated-shape">
                  <img src="/img/shape/6.png" alt="Image Not Found" />
                </div>
                <div className="f-item about pr-50 pr-xs-0 pr-md-0">
                  <img className="logo" src="/img/logo/logo-white.png" alt="Logo" />
                  <p>
                    At Taksim Medical Clinics, we provide specialized
                    consultations and comprehensive treatment packages, ensuring
                    all necessary services for patients from their arrival in
                    Turkey until departure.
                  </p>
                  <div className="footer-social mt-30">
                    <ul>
                      <SocialShare />
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                <div className="f-item link">
                  <h4 className="widget-title">Our Departments</h4>
                  <ul>
                  
                    <li>
                      <Link to="#about-us">About</Link>
                    </li>
                    <li>
                      <Link to="#services">Services</Link>
                    </li>
                    <li>
                      <Link to="#gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="#cosmetics">Cosmetics</Link>
                    </li>
                    <li>
                      <Link to="#why-choose-taksim">Why Choose Taksim</Link>
                    </li>
                    <li>
                      <Link to="#contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-item mt-50">
                <div className="f-item contact">
                  <h4 className="widget-title">Contact Info</h4>
                  <ul>
                    <li>
                      <div className="content">
                        <strong>Address:</strong>
                        14/1 Mete Road Ayanoğlu business center - Gümüşsuyu .
                        (Taksim Square) Beyoğlu - İstanbul
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <strong>Email:</strong>
                        <a href="mailto:info@taksimclinics.com">
                          info@taksimclinics.com
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <strong>Phone:</strong>
                        <a href="tel:2151234567">+905439086696</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-item mt-50">
                <div className="f-item contact">
                  <h4 className="widget-title">We’re Available</h4>
                  <ul>
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="me-3">Monday :</strong>
                        <span>10.00 - 08.00</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="me-3">Tuesday :</strong>
                        <span>10.00 - 08.00</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="me-3">Wednesday:</strong>
                        <span>10.00 - 08.00</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="me-3">Thursday :</strong>
                        <span>10.00 - 08.00</span>
                      </div>
                    </li>

                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="me-3">Friday:</strong>
                        <span>10.00 - 08.00</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="me-3">Saturday :</strong>
                        <span>10.00 - 08.00</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom bg-dark text-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>
                  Copyright &copy; {new Date().getFullYear()} Taksim Medical Clinics All
                  Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterV1;
