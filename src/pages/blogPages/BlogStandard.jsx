import React from 'react';
import HeaderV2 from '../../components/header/HeaderV2';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import BlogStandardContent from '../../components/blog/BlogStandardContent';
import FooterV1 from '../../components/footer/FooterV1';

const BlogStandard = () => {
    return (
        <>
            <HeaderV2 />
            <BreadCrumb breadCrumb="blog-standard" title1="Blog Standard" bottomSpace="pb-0" offsetClass="offset-lg-1" />
            <BlogStandardContent />
            <FooterV1 />
        </>
    );
};

export default BlogStandard;