import React from 'react';
import { Header } from '../../antd/index';
import CustomButton from "@components/customButtons/CustomButton";

const HeaderDefault = () => {
    return (
        <Header className='header'>
            <div className='container'>
                <div className='header-info'>
                    <div>
                        <img src='' alt='Kristyle' />
                    </div>
                    <div className='header-contacts'>
                        <CustomButton />
                        <div className='social-media'>icons</div>
                        <div className='contacts'>+375291071816</div>
                    </div>
                </div>
            </div>
        </Header>
    );
};

export default HeaderDefault;
