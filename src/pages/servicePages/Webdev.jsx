import React from 'react';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import ServicesV2Grid from '../../components/services/ServicesV2Grid';
import AboutV1 from '../../components/about/AboutV1';
import TestimonialV2 from '../../components/testimonial/TestimonialV2';
import ProjectDeal from '../project/ProjectDeal';
import FooterV1 from '../../components/footer/FooterV1';
import HeaderV2 from '../../components/header/HeaderV2';
import ProjectColumnContent from '../../components/project/ProjectColumnContent';

const Webdev = () => {
    return (
        <>
            <div className="wrapper">
                <HeaderV2 />
                <BreadCrumb breadCrumb="services-2" title1="Turn Information" title2="Into Actionable Insights" bottomSpace="pb-0" />
                <ServicesV2Grid />
                <AboutV1 />
                <PriceV1 priceClass="bg-gray default-padding" />
                <TestimonialV2 />
                <ProjectDeal />
                <ProjectColumnContent columns="colums-3" />
                <FooterV1 />
            </div>
        </>
    );
};

export default Webdev;