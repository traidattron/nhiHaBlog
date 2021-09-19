<<<<<<< Updated upstream
import React, {useEffect, useState} from 'react'
import {HeaderBlock, HeaderContentCover, NavigatorCover, OnlyCenter, TitleBlock} from '../components/Block/HeaderBlock';
import {Image, Row, Col} from 'antd';
import MyNavigation from '../components/Navigation/Navigation';
import SearchCustom from '../components/Search/Search';
import {AuthorBlock, AuthorPicture} from '../components/Author/AuthorBlock';
import {TextLarge, TextSmall, Title} from '../components/Text/Text';
import {LineOutlined} from '@ant-design/icons';
import Footer from "../components/Footer/Footer";
import useHttp from "../hooks/use-http";

=======
import React from 'react';
import {
    HeaderBlock,
    HeaderContentCover,
    NavigatorCover,
    OnlyCenter,
    TitleBlock,
} from '../components/Block/HeaderBlock';
import { Image, Row, Col } from 'antd';
import MyNavigation from '../components/Navigation/Navigation';
import SearchCustom from '../components/Search/Search';
import { AuthorBlock, AuthorPicture } from '../components/Author/AuthorBlock';
import { TextLarge, TextSmall, Title } from '../components/Text/Text';
import { LineOutlined } from '@ant-design/icons';
import Footer from '../components/Footer/Footer';
import Header from '../containers/Header/Header';
>>>>>>> Stashed changes
const About = () => {
    const [data, setData] = useState([]);
    const config = { url: 'http://localhost:3001/authors', method: 'GET' };
    const { isLoading, error, sendRequest: getTask } = useHttp(config, setData);
    useEffect(() => {
        getTask(setData);
    }, [getTask]);
    return (
        <>
            <Header />
            <TitleBlock>
                <div style={{ lineHeight: '0' }}>
                    <TextLarge style={{ color: 'black' }}>ABOUT US</TextLarge>
                    <OnlyCenter>
                        <LineOutlined style={{ color: 'black', fontSize: '50px' }} />
                    </OnlyCenter>
                </div>
            </TitleBlock>
<<<<<<< Updated upstream
            <div style={{background: '#F8F7F3'}}>
                {!isLoading && data.length &&
                data.map(author =>
                    <Row>
                        {author.side === 'right' ? (
                            <>
                                <Col span={8}>
                                    <AuthorPicture side={author.side} bgSrc={author.background} src={author.avatar}/>
                                </Col>
                                <Col span={16}>
                                    <AuthorBlock name={author.name} description={author.description}/>
                                </Col>
                            </>
                        ) : (
                            <>
                                <Col span={16}>
                                    <AuthorBlock name={author.name} description={author.description}/>
                                </Col>
                                <Col span={8}>
                                    <AuthorPicture side={author.side} bgSrc={author.background} src={author.avatar}/>
                                </Col>
                            </>
                        )}
                    </Row>
                )}
=======
            <div style={{ background: '#F8F7F3' }}>
                <Row>
                    <Col span={8}>
                        <AuthorPicture
                            side='right'
                            bgSrc='zelda-avatar-background.svg'
                            src='zelda-profile-picture.png'
                        />
                    </Col>
                    <Col span={16}>
                        <AuthorBlock
                            name='ZELDA'
                            description='But art, true art that is, truly does have the capability of bringing us all together and revealing to ourselves our true nature as human beings. We are driven to create and appreciate great pieces of music, films and paintings even those that are apolitical and seemingly irrelevant to the on-going events - out of boredom, and the ever desire to express our thoughts and emotions'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={16}>
                        <AuthorBlock
                            name='NEMO'
                            description='But art, true art that is, truly does have the capability of bringing us all together and revealing to ourselves our true nature as human beings. We are driven to create and appreciate great pieces of music, films and paintings even those that are apolitical and seemingly irrelevant to the on-going events - out of boredom, and the ever desire to express our thoughts and emotions'
                        />
                    </Col>
                    <Col span={8}>
                        <AuthorPicture
                            side='left'
                            bgSrc='nemo-avatar-background.svg'
                            src='nemo-profile-picture.png'
                        />
                    </Col>
                </Row>
>>>>>>> Stashed changes
            </div>
            <Footer />
        </>
    );
};

export default About;
