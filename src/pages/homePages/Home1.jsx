import React from "react";
import BannerV1 from "../../components/banner/BannerV1";
import ServicesV1 from "../../components/services/ServicesV1";
import AboutV1 from "../../components/about/AboutV1";
import ProcessV1 from "../../components/process/ProcessV1";
import ProjectV1 from "../../components/project/ProjectV1";
import TeamV1 from "../../components/team/TeamV2";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";
import FooterV1 from "../../components/footer/FooterV1";
import BannerV4 from "../../components/banner/BannerV4";
import ServicesV2 from "../../components/services/ServicesV2";
import ContactV1 from "../../components/contact/ContactV1";
import AboutV2 from "../../components/about/AboutV2";
import HeaderV2 from "../../components/header/HeaderV2";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import HeaderV4 from "../../components/header/HeaderV4";
import ProjectCarouselContent from "../../components/project/ProjectCarouselContent";

const Home1 = () => {
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="90 501 355 0300"
        accountName="Taksim Medical Clinic"
        statusMessage="We are available to chat!"
        chatMessage="Hello! How can we assist you today?"
        avatar=""
        darkMode={false}
        buttonStyle={{ left: "20px" }}
        chatboxStyle={{
          left: "20px",
          height: "auto",
          fontFamily:
            'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        }}
        allowClickAway={true}
      />
      <HeaderV4 logoColor={true} />
      <BannerV4 />
      <AboutV2 />
      <ProjectV1 />
      <BannerV1 />
      <ServicesV2 />
      <ProjectCarouselContent />
      <AboutV1 />
      <ProcessV1 />
      <TeamV1 />
      <TestimonialV1 />
      <ContactV1 />
      <FooterV1 />
    </>
  );
};

export default Home1;