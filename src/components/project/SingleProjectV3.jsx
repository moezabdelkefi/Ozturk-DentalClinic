import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SingleProjectV1 = ({ project }) => {
  const { thumb, subTitle, title, shape } = project;

  return (
    <>
      <div className="swiper-slide">
        <div className="project-style-one">
          <img
            src={`/img/portfolio/${thumb}`}
            alt="Thumb"
            className="img-fluid"
            style={{ width: "540px", height: "415px", objectFit: "cover" }}
          />
        </div>
      </div>
    </>
  );
};

export default SingleProjectV1;
