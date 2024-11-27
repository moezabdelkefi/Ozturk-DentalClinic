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
                    Nous offrons des soins dentaires complets pour toute la
                    famille, des préventions aux traitements avancés, pour des
                    sourires sains et confiants.
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
                  <h4 className="widget-title">Nos départements</h4>
                  <ul>
                    <li>
                      <Link to="#about-us">À propos</Link>
                    </li>
                    <li>
                      <Link to="#services">Services</Link>
                    </li>
                    <li>
                      <Link to="#gallery">Galerie</Link>
                    </li>

                    <li>
                      <Link to="#why-choose-taksim">Pourquoi nous choisir</Link>
                    </li>
                    <li>
                      <Link to="#contact-us">Contactez-nous</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-item mt-50">
                <div className="f-item contact">
                  <h4 className="widget-title">Coordonnées</h4>
                  <ul>
                    <li>
                      <div className="content">
                        <strong>Address:</strong>
                        Istanbul - Turquie
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
                        <strong>Téléphone:</strong>
                        <a href="tel:2151234567">+90 536 063 0089</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-item mt-50">
                <div className="f-item contact">
                  <h4 className="widget-title">Nous sommes disponibles</h4>
                  <ul>
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="me-3">Du lundi au vendredi </strong>
                        <span>08.00 - 07.00</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="me-3">Le samedi</strong>
                        <span>08.00 - 03. 00 </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="me-3">Le dimanche</strong>
                        <span>(Fermé)</span>
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
                  <a href="https://www.badfi.tech/" target="_blank">
                    {" "}
                    by BADFi.tech
                  </a>{" "}
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
