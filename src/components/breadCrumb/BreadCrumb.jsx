import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const BreadCrumb = ({
  title1,
  title2,
  breadCrumb,
  bottomSpace,
  offsetClass,
}) => {
  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div
            className={`breadcrumb-item ${
              bottomSpace ? bottomSpace : "pb-120"
            }`}
          >
            <div className="breadcrum-shape">
              <img src="/img/shape/16.png" alt="Image Not Found" />
            </div>
            <div className="row">
              <div className={`col-lg-8 ${offsetClass ? offsetClass : ""}`}>
                <h1>
                  {title1 ? title1 : "404 Not Found"} <br />{" "}
                  {title2 ? title2 : ""}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
