import React from "react";
import ServiceV1Data from "../../jsonData/TakasimData.json";
import SingleServicesV1 from "./SingleServicesV1";

const ServicesV1 = () => {
  return (
    <>
      <div
        className="default-padding box-layout overflow-hidden bottom-less services-style-one-area bg-gray bg-cover"
        style={{ backgroundImage: "url(/img/shape/banner-2.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h5 className="sub-title">Founded by dental specialists by</h5>
                <h2 className="title">
                  Taksim Medical Clinic provides cosmetic and therapeutic
                  services ,partnering with top hospitals for full care.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {ServiceV1Data.slice(0, 6).map((service) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 mb-30 mt-50"
                key={service.id}
              >
                <SingleServicesV1 service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesV1;
