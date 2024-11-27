import React from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const handleForm = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Thanks For Your Message");
  };

  return (
    <>
      <div className="contact-form-style-one">
        <h4 className="sub-title">Vous avez des questions ?</h4>
        <h2 className="title">Envoyez-nous un massage</h2>
        <form className="contact-form contact-form" onSubmit={handleForm}>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
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
                  name="email"
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
                  name="phone"
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
              <div className="form-group comments">
                <textarea
                  className="form-control"
                  id="comments"
                  name="comments"
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
                <i className="fa fa-paper-plane"></i> Entrer en contact
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
