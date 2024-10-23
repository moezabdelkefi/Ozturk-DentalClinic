import React from 'react';
import HeaderV2 from '../../components/header/HeaderV2';
import Error404Content from '../../components/error404/Error404Content';
import FooterV1 from '../../components/footer/FooterV1';

const Error404 = () => {
    return (
        <>
            <HeaderV2 />
            <Error404Content />
            <FooterV1 />
        </>
    );
};

export default Error404;