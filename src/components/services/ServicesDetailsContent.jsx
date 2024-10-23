import React from "react";
import FeatureListData from "../../jsonData/FeatureListData.json";


const ServicesDetailsContent = ({ serviceInfo }) => {
  const { thumb, text, title } = serviceInfo;

  return (
    <>
      <div className="services-details-area default-padding">
        <div className="container">
          <div className="services-details-items">
            <div className="row">
              <div className="col-xl-8 col-lg-7 pr-45 pr-md-15 pr-xs-15 services-single-content">
                <div className="service-single-thumb">
                  <img src={`/img/services/${thumb}`} alt="Thumb" />
                </div>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                  <div className="row">
                    <div className="col-lg-5 col-md-6">
                      <div className="content">
                        <h3>Included Services</h3>
                        <ul className="feature-list-item">
                          {FeatureListData.map((list) => (
                            <li key={list.id}>{list.featureList}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-6 mt-xs-30">
                      <div className="content">
                        <h3>The Challange</h3>
                        <p>
                          Temporibus autem quibusdam et aut officiis debitis aut
                          rerum necessitatibus saepe eveniet ut et voluptates
                          repudiandae sint et molestiae non recusandae. Itaque
                          earum rerum hic tenetur a sapiente delectus, ut aut
                          reiciendis voluptatibus maiores alias. consequatur aut
                          perferendis doloribus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h3>What we do?</h3>
                <p>
                  Nam libero tempore, cum soluta nobis est elig endi optio
                  cumque nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor repelle
                  ndus. Temporibus autem quibusdam et aut officiis debitis aut
                  rerum necessitatibus saepe eveniet ut et voluptates
                  repudiandae sint et molestiae non recusandae. Itaque earum
                  rerum hic tenetur a sapiente delectus, ut aut reiciendis
                  voluptatibus maiores alias. consequatur aut perferendis
                  doloribus asperiores repellat. The wise man therefore always
                  holds in these matters to this principle of selection: he
                  rejects pleasures to secure other greater pleasures, or else
                  he endures pains to avoid worse pains. pleasures have to be
                  repudiated and annoyances accepted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetailsContent;