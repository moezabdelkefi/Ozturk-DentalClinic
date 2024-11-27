import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const ProjectDeal = () => {
  return (
    <>
      <div className="project-deal-area text-center default-padding bg-gray">
        <div className="arrow-illustration">
          <img src="/img/illustration/9.png" alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="project-deal">
                <h2 className="title">
                  Besoin de soins dentaires ? <strong>Contactez-nous</strong>{" "}
                  <br /> et transformez votre sourire !
                </h2>
                <Link
                  className="btn mt-30 btn-md circle btn-gradient animation"
                  to="#contact-us"
                >
                  Envoyer un message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDeal;
