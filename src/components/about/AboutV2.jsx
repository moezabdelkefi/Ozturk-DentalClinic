import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const AboutV2 = () => {
  return (
    <>
      <div id="about-us" className="about-style-two-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 about-style-two">
              <div className="about-two-thumb">
                <img src="/img/thumb/about.webp" alt="Image Not Found" />
                <div className="experience">
                  <h2>
                    plus
                    <strong>15</strong> Années d'expérience
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 about-style-two pl-50 pl-md-15 pl-xs-15 mt-xs-40">
              <div className="about-two-info">
                <h4 className="sub-title">À propos de nous</h4>

                <p>
                  Nous nous engageons à fournir les dernières solutions
                  dentaires pour assurer un sourire sain et durable à chaque
                  patient.
                </p>
                <p>
                  Notre clinique est agréée par toutes les autorités médicales
                  du gouvernement turc et tous nos médecins sont diplômés des
                  meilleures universités du monde.
                </p>
                <h2 className="title">
                  Notre clinique est agréée par le ministère turc de la Santé.
                </h2>
                <p>
                  Notre clinique est agréée par toutes les autorités médicales
                  du gouvernement turc et tous nos médecins sont diplômés des
                  meilleures universités du monde.
                </p>
                <p>
                  Qu'est-ce qui nous distingue des autres ? Nous sommes des
                  médecins, pas une agence de marketing. Dès que vous nous
                  contactez, la coordination sera directement assurée par votre
                  médecin qui vous soignera.
                </p>
                <div className="image-container">
                  <img src="/img/minlogo/minlogo.webp" alt="Image 1" />
                  <img src="/img/minlogo/minlogo2.webp" alt="Image 2" />
                  <img src="/img/minlogo/minlogo3.webp" alt="Image 3" />
                  <img src="/img/minlogo/minlogo4.webp" alt="Image 4" />
                </div>
                <div className="button">
                  <Link
                    className="btn btn-md btn-gradient animation mt-35"
                    to="#contact-us"
                  >
                    Consultez Nos Services
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

export default AboutV2;
