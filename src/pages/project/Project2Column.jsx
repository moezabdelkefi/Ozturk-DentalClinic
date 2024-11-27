import React from 'react';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import ProjectColumnContent from '../../components/project/ProjectColumnContent';

const Project2Column = () => {
    return (
        <>
            <div className="wrapper">
                <BreadCrumb breadCrumb="project-2-column" title1="Découvrez ici certains de nos services les plus récents" bottomSpace="pb-0" />
                <ProjectColumnContent columns="colums-2" />
            </div>
        </>
    );
};

export default Project2Column;