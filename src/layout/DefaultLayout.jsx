import React from 'react';
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

const DefaultLayout = (props) => {
    return (
        <div className='layout'>
            <Header />
            <div>{props.children}</div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
