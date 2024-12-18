import React from 'react';
import HeaderV2 from '../../components/header/HeaderV2';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import Team3Content from '../../components/team/Team3Content';
import FooterV1 from '../../components/footer/FooterV1';

const Team3 = () => {
    return (
        <>
            <HeaderV2 />
            <BreadCrumb breadCrumb="team-3" title1="Professional team members" />
            <Team3Content />
            <FooterV1 />
        </>
    );
};

export default Team3;