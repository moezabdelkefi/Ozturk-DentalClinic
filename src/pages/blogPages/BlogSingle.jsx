import React from 'react';
import HeaderV2 from '../../components/header/HeaderV2';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import BlogSingleContent from '../../components/blog/BlogSingleContent';
import FooterV1 from '../../components/footer/FooterV1';
import { useParams } from 'react-router-dom';
import BlogV1Data from '../../jsonData/BlogV1Data.json'

const BlogSingle = () => {

    const { id } = useParams()
    const data = BlogV1Data.filter(blog => blog.id === parseInt(id))[0]

    return (
        <>
            <HeaderV2 />
            <BreadCrumb breadCrumb="blog-single" title1="Blog Grid" bottomSpace="pb-0" offsetClass="offset-lg-1" />
            <BlogSingleContent blogInfo={data} />
            <FooterV1 />
        </>
    );
};

export default BlogSingle;