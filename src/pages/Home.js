import React from 'react';
import { TitleBlock, OnlyCenter } from '../components/Block/HeaderBlock';

import { TextLarge } from '../components/Text/Text';

import { LineOutlined } from '@ant-design/icons';
import LastedBlogBlock from '../components/Block/LastedBlogBlock';
import Footer from '../components/Footer/Footer';
import BlogsBlock from '../components/Block/BlogsBlock';
import Header from '../containers/Header/Header';

const Home = () => {
    return (
        <>
            <Header />
            <TitleBlock>
                <div style={{ lineHeight: '0' }}>
                    <TextLarge style={{ color: 'black' }}>LASTED BLOG</TextLarge>
                    <OnlyCenter>
                        <LineOutlined style={{ color: 'black', fontSize: '50px' }} />
                    </OnlyCenter>
                </div>
            </TitleBlock>
            <LastedBlogBlock />

            <TitleBlock>
                <div style={{ lineHeight: '0' }}>
                    <TextLarge style={{ color: 'black' }}>OUR BLOGS</TextLarge>
                    <OnlyCenter>
                        <LineOutlined style={{ color: 'black', fontSize: '50px' }} />
                    </OnlyCenter>
                </div>
            </TitleBlock>
            <BlogsBlock />
            <Footer />
        </>
    );
};

export default Home;
