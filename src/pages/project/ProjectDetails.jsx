import React from 'react';
import HeaderV2 from '../../components/header/HeaderV2';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import ProjectDetailsContent from '../../components/project/ProjectDetailsContent';
import FooterV1 from '../../components/footer/FooterV1';
import { useParams } from 'react-router-dom';
import ProjectV1Data from '../../jsonData/ProjectV1Data.json'

const ProjectDetails = () => {

    const { id } = useParams()
    const data = ProjectV1Data.filter(project => project.id === parseInt(id))[0]

    return (
        <>
            <HeaderV2 />
            <BreadCrumb breadCrumb="project-details" title1="Search engine optimization (SEO)" bottomSpace="pb-0" />
            <ProjectDetailsContent projectInfo={data} />
            <FooterV1 />
        </>
    );
};

export default ProjectDetails;