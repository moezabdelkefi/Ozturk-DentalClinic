import React from 'react';
import HeaderV2 from '../../components/header/HeaderV2';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import Blog3ColumnContent from '../../components/blog/Blog3ColumnContent';
import FooterV1 from '../../components/footer/FooterV1';

const Blog3Column = () => {
    return (
        <>
            <HeaderV2 />
            <BreadCrumb breadCrumb="blog-3-column" title1="Blog Grid" bottomSpace="pb-0" />
            <Blog3ColumnContent />
            <FooterV1 />
        </>
    );
};

export default Blog3Column;