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
                  <img className="logo" src="/img/logo/logo.webp" alt="Logo" />
                  <p>
                    We offer a comprehensive range of dental services that meet
                    the needs of every member of your family, from preventive
                    care to advanced treatments. Our goal is to ensure the oral
                    health and confident smiles of your family.
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
                      <Link to="#why-choose-taksim">Why Choose Us</Link>
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
                        Istanbul - Turkey
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <strong>Email:</strong>
                        <a href="mailto:info@dr-abdurrahmanozturk.com">
                          info@dr-abdurrahmanozturk.com
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <strong>Phone:</strong>
                        <a href="tel:2151234567">+90 536 063 0089</a>
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
                        <strong className="me-3">Monday - Friday </strong>
                        <span>08.00 AM - 07.00 PM</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="me-3">Saturday</strong>
                        <span>08.00 AM - 03. 00 PM</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="me-3">Sunday</strong>
                        <span>(Close)</span>
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
                  Copyright &copy; {new Date().getFullYear()} DR. ABDURRAHMAN
                  ÖZTÜRK DENTAL CLINIC All Rights Reserved project
                  <a href="https://www.badfi.tech/" target="_blank"> by BADFi.tech</a>                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterV1;
