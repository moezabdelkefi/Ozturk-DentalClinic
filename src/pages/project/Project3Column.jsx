import React from 'react';
import HeaderV2 from '../../components/header/HeaderV2';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import ProjectColumnContent from '../../components/project/ProjectColumnContent';
import FooterV1 from '../../components/footer/FooterV1';

const Project3Column = () => {
    return (
        <>
            <div className="wrapper">
                <HeaderV2 />
                <BreadCrumb breadCrumb="project-3-column" title1="Take a look some of" title2="our recent case studies" bottomSpace="pb-0" />
                <ProjectColumnContent columns="colums-3" />
                <FooterV1 />
            </div>
        </>
    );
};

export default Project3Column;