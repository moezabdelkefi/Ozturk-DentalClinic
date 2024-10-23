import React from "react";
import ServiceV2Data from "../../jsonData/ServiceV2Data.json";
import SingleServiceV2 from "./SingleServiceV2";

const ServicesV2 = () => {
  return (
    <>
      <div className="services-style-two-area bg-gray default-padding bottom-less">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 mb-30">
              <div
                className="service-style-two-heading bg-theme bg-cover text-light"
                style={{ backgroundImage: "url(/img/shape/banner-3.webp)" }}
              >
                <h5 className="sub-title">Founded by dental specialists by</h5>
                <h2 className="title fs-2">
                  {" "}
                  Taksim Medical Clinic provides cosmetic and therapeutic
                  services ,partnering with top hospitals for full care.
                </h2>
              </div>
            </div>
            {ServiceV2Data.map((service) => (
              <div
                className="col-xl-3 col-lg-6 col-md-6 mb-30"
                key={service.id}
              >
                <SingleServiceV2 service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesV2;
