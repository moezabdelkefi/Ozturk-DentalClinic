import React from "react";
import SocialShare2 from "../others/SocialShare2";
import { HashLink as Link } from "react-router-hash-link";
import { toast } from "react-toastify";

const HeaderSidebarMenu = ({
  isSidebarOpen,
  removeClasses,
  addClasses,
  searchOpen,
}) => {
  const handleEmail = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Thanks for your Email");
  };

  return (
    <>
      <div className="attr-right">
        <div className="attr-nav flex">
          <ul>
            <li className="side-menu">
              <Link to={void 0} onClick={addClasses}>
                <span className="bar-1"></span>
                <span className="bar-2"></span>
                <span className="bar-3"></span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={`side ${isSidebarOpen ? "on" : ""}`}>
          <Link to={void 0} className="close-side" onClick={removeClasses}>
            <i className="icon_close"></i>
          </Link>
          <div className="widget">
            <div className="logo">
              <img src="/img/logo/logo.webp" alt="Logo" />
            </div>
          </div>
          <div className="widget">
            <p>
              Notre clinique bénéficie de la confiance de nombreux centres
              médicaux qui nous adressent des patients du monde entier. Nous
              avons réalisé avec succès de nombreuses interventions et fourni
              les meilleurs traitements d'implants dentaires, garantissant des
              résultats exceptionnels et des soins médicaux de haute qualité à
              nos patients.
            </p>
          </div>
          <div className="widget address">
            <div>
              <ul>
                <li>
                  <div className="content">
                    <p>Address</p>
                    <strong>Istanbul - Turquie</strong>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <p>Email</p>
                    <strong>
                      <a
                        href="info@dr-abdurrahmanozturk.com"
                        className="color-para"
                      >
                        info@dr-abdurrahmanozturk.com
                      </a>
                    </strong>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <p>CONTACTEZ-NOUS</p>
                    <strong>
                      <a href="tel:+90 501 355 0300" className="color-para">
                        +90 536 063 0089
                      </a>
                    </strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="widget social">
            <ul className="link">
              <SocialShare2 />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSidebarMenu;
