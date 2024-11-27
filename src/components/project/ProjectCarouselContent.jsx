import React, { useState } from "react";
import ProjectV1Data from "../../jsonData/ProjectV2Data.json";
import SingleProjectV3 from "./SingleProjectV3";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import { useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";

const ProjectV1 = () => {
  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  // eslint-disable-next-line no-unused-vars
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <>
      <div
        id="cosmetics"
        className="project-style-one-area overflow-hidden default-padding-top bg-gray"
      >
        <div className="container">
          <div className="heading-left">
            <div className="row">
              <div className="col-xl-8 col-lg-6">
                <div className="content-left">
                  <div className="button">
                    <Link
                      className="btn btn-theme btn-md animation"
                      to="#contact-us"
                    >
                      Votre Santé Dentaire Nous Appelle
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="project-nav-box">
            <div className="project-swiper-nav">
              <div className="project-button-prev" onClick={handlePrev}></div>
              <div className="project-button-next" onClick={handleNext}></div>
            </div>
          </div>
        </div>

        <div className="project-style-one-items">
          <div className="container-fill">
            <div className="row">
              <div className="col-lg-12">
                <div className="project-center-stage-carousel swiper">
                  <div className="swiper-wrappers mb-60">
                    <Swiper
                      ref={SlideRef}
                      initialSlide={1}
                      onSlideChange={handleSlideChange}
                      modules={[Keyboard]}
                      speed={700}
                      freeMode={true}
                      grabCursor={true}
                      centeredSlides={true}
                      pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                      }}
                      loop={true}
                      keyboard={{
                        enabled: true,
                      }}
                      breakpoints={{
                        991: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                          centeredSlides: false,
                        },
                        1200: {
                          slidesPerView: 2.5,
                          spaceBetween: 60,
                        },
                        1800: {
                          slidesPerView: 2.8,
                          spaceBetween: 80,
                        },
                      }}
                    >
                      {ProjectV1Data.map((project) => (
                        <SwiperSlide key={project.id}>
                          <SingleProjectV3 project={project} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
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

export default ProjectV1;
