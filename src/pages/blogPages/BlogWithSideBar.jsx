import React from 'react';
import HeaderV2 from '../../components/header/HeaderV2';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import BlogWithSideBarContent from '../../components/blog/BlogWithSideBarContent';
import FooterV1 from '../../components/footer/FooterV1';

const BlogWithSideBar = () => {
    return (
        <>
            <HeaderV2 />
            <BreadCrumb breadCrumb="blog" title1="Blog" bottomSpace="pb-0" />
            <BlogWithSideBarContent />
            <FooterV1 />
        </>
    );
};

export default BlogWithSideBar;