import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleForm = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_gpnayin",
        "template_f8fezmt",
        event.target,
        "ik3suGxXvRhL2mAZS"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thanks For Your Message");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message, please try again.");
        }
      );

    event.target.reset();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="contact-form-style-one">
        <h4 className="sub-title">Vous avez des questions ?</h4>
        <h2 className="title">Prendre rendez-vous</h2>
        <form className="contact-form contact-form" onSubmit={handleForm}>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="from_name"
                  placeholder="Nom"
                  type="text"
                  autoComplete="off"
                  required
                />
                <span className="alert-error"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  className="form-control"
                  id="email"
                  name="from_email"
                  placeholder="Email*"
                  type="email"
                  autoComplete="off"
                  required
                />
                <span className="alert-error"></span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  className="form-control no-arrows"
                  id="phone"
                  name="from_phone"
                  placeholder="telephone"
                  type="number"
                  autoComplete="off"
                  required
                />
                <span className="alert-error"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <div className="dropdown-container" onClick={toggleDropdown}>
                  <select
                    className={`form-control ${isDropdownOpen ? "open" : ""}`}
                    id="treatment"
                    name="treatment_required"
                    required
                  >
                    <option value="" disabled selected>
                      Sélectionnez le traitement requis
                    </option>
                    <option value="Oral and Maxillofacial Surgery">
                      Chirurgie buccale et maxillo-faciale
                    </option>
                    <option value="Endodontics">Endodontie</option>
                    <option value="Prosthodontics">Prothèses dentaires</option>
                    <option value="Digital Dentistry">
                      Dentisterie numérique
                    </option>
                    <option value="Cosmetic Dentistry">
                      Dentisterie esthétique
                    </option>
                    <option value="implant dentaire">implant dentaire</option>
                  </select>
                  <span
                    className={`arrow ${isDropdownOpen ? "flipped" : ""}`}
                  ></span>
                </div>
                <span className="alert-error"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group comments">
                <textarea
                  className="form-control"
                  id="comments"
                  name="message"
                  placeholder="Dites-nous"
                  autoComplete="off"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <button type="submit" name="submit" id="submit">
                <i className="fa fa-paper-plane"></i> soumettre
              </button>
            </div>
          </div>
          <div className="col-lg-12 alert-notification">
            <div id="message" className="alert-msg"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
