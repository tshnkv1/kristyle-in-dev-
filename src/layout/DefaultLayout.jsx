import React from 'react';
import { Layout, Content } from "../antd/index";
import HeaderDefault from "@components/Header/Header";
import FooterDefault from "@components/Footer/Footer";

const DefaultLayout = (props) => {
    return (
        <Layout>
            <HeaderDefault />
            <Content>
                {props.children}
            </Content>
            <FooterDefault />
        </Layout>
    );
};

export default DefaultLayout;
