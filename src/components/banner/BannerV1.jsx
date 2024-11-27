import React from "react";
import ReactWOW from "react-wow";
import { HashLink as Link } from "react-router-hash-link";

const BannerV1 = () => {
  return (
    <>
      <div
        id="gallery"
        className="banner-style-one-area"
        style={{ backgroundImage: "url(img/shape/1.png)" }}
      >
        <div className="shape-left-top">
          <img src="img/shape/2.png" alt="Shape" />
        </div>
        <div className="banner-style-one">
          <div className="container">
            <div className="content">
              <div className="row align-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="information">
                    <ReactWOW delay="500ms" duration="400ms">
                      <h2 className="fadeInUp">
                        Our patients' <strong>results</strong>
                      </h2>
                    </ReactWOW>
                    <ReactWOW delay="900ms" duration="400ms">
                      <p className="fadeInUp">
                        At Dr. Abdurrahman Ozturk’s clinic, we pride ourselves
                        on delivering exceptional results in dental implants,
                        cosmetic dentistry, and full-mouth rehabilitation.
                        Below, you will find a collection of before and after
                        photos showcasing the incredible transformations our
                        patients have achieved through various dental
                        procedures.
                      </p>
                    </ReactWOW>
                    <ReactWOW delay="1200ms" duration="400ms">
                      <div className="button mt-40 fadeInUp">
                        <Link
                          className="btn btn-md btn-gradient animation"
                          to="https://www.instagram.com/dr.abdurrahmanozturk.tr"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          view instagram
                        </Link> 
                      </div>
                    </ReactWOW>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                  <div className="thumb">
                    <ReactWOW>
                      <img
                        className="fadeInUp"
                        src="img/thumb/gallery.webp"
                        alt="Banner Image"
                      />
                    </ReactWOW>
                    <ReactWOW delay="500ms">
                      <img
                        className="fadeInDown"
                        src="img/thumb/gallery2.webp"
                        alt="Banner Image"
                      />
                    </ReactWOW>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerV1;
