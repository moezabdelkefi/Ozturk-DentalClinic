import React from 'react';
import HeaderV2 from '../../components/header/HeaderV2';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import ProjectColumnContent from '../../components/project/ProjectColumnContent';
import FooterV1 from '../../components/footer/FooterV1';

const Project2Column = () => {
    return (
        <>
            <div className="wrapper">
                <HeaderV2 />
                <BreadCrumb breadCrumb="project-2-column" title1="Take a look some of" title2="our recent case studies" bottomSpace="pb-0" />
                <ProjectColumnContent columns="colums-2" />
                <FooterV1 />
            </div>
        </>
    );
};

export default Project2Column;