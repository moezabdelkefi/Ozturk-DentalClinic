import React from 'react';
import HeaderV2 from '../../components/header/HeaderV2';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import ProjectDeal from '../project/ProjectDeal';
import FooterV1 from '../../components/footer/FooterV1';

const Pricing = () => {
    return (
        <>
            <HeaderV2 />
            <BreadCrumb breadCrumb="pricing" title1="Committed to" title2="giving the best price" bottomSpace="pb-0" />
            <PriceV2 />
            <ProjectDeal />
            <FooterV1 />
        </>
    );
};

export default Pricing;