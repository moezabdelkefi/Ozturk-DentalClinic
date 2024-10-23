import React from 'react';
import HeaderV2 from '../../components/header/HeaderV2';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import ProjectCarouselContent from '../../components/project/ProjectCarouselContent';
import FooterV1 from '../../components/footer/FooterV1';

const ProjectCarousel = () => {
    return (
        <>
            <HeaderV2 />
            <BreadCrumb breadCrumb="project-carousel" title1="Take a look some of" title2="our recent case studies" bottomSpace="pb-0" />
            <ProjectCarouselContent />
            <FooterV1 />
        </>
    );
};

export default ProjectCarousel;