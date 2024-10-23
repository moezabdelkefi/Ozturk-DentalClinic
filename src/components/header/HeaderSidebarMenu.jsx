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
            <li className="search">
              <Link to={void 0} onClick={searchOpen}>
                <i className="fa-solid fa-search"></i>
              </Link>
            </li>
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
              <img src="/img/logo/logo-white.png" alt="Logo" />
            </div>
          </div>
          <div className="widget">
            <p>
              At Taksim Medical Clinics, we offer you direct consultations from
              a medical team specialized in the relevant health condition, in
              addition to a variety of treatment packages that include all the
              necessary services for the patient from the moment he arrives in
              Turkey until his departure.
            </p>
          </div>
          <div className="widget address">
            <div>
              <ul>
                <li>
                  <div className="content">
                    <p>Address</p>
                    <strong>
                      14/1 Mete Road Ayanoğlu business center - Gümüşsuyu .
                      (Taksim Square) Beyoğlu - İstanbul
                    </strong>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <p>Email</p>
                    <strong>
                      <a href="info@taksim-clinics.com" className="color-para">
                        info@taksimclinics.com
                      </a>
                    </strong>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <p>Contact</p>
                    <strong>
                      <a href="tel:+90 501 355 0300" className="color-para">
                        +90 501 355 0300
                      </a>
                    </strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="widget newsletter">
            <h4 className="title">CONTACT US</h4>
            <form onSubmit={handleEmail}>
              <div className="input-group stylish-input-group">
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="form-control"
                  name="email"
                  autoComplete="off"
                  required
                />
                <span className="input-group-addon">
                  <button type="submit">
                    <i className="arrow_right"></i>
                  </button>
                </span>
              </div>
            </form>
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
