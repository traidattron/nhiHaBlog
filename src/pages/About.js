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

const About = () => {
    const [data, setData] = useState([]);
    const config = { url: 'http://localhost:3001/authors', method: 'GET' };
    const { isLoading, error, sendRequest: getTask } = useHttp(config, setData);
    useEffect(() => {
        getTask(setData);
    }, [getTask]);
    return (
        <>
            <HeaderBlock>
                <NavigatorCover>
                    <Image
                        width={200}
                        src='mylogo.svg'
                        preview={{
                            src: 'mylogo.svg'
                        }}
                    />
                    <MyNavigation id='my-navigator' />
                </NavigatorCover>
                <HeaderContentCover>
                    <SearchCustom />
                    <div>
                        <Title>
                            HAI NGƯỜI ĐI
                            KHẮP THẾ GIAN
                        </Title>
                        <TextSmall>
                            THE ONLY TRIP YOU WILL REGRET
                            IS THE ONE YOU DON’T TAKE
                        </TextSmall>
                    </div>

                </HeaderContentCover>
            </HeaderBlock>
            <TitleBlock>
                <div style={{ lineHeight: '0' }}>
                    <TextLarge style={{ color: 'black' }}>ABOUT US</TextLarge>
                    <OnlyCenter>
                        <LineOutlined style={{ color: 'black', fontSize: '50px' }} />
                    </OnlyCenter>
                </div>
            </TitleBlock>
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
            </div>
            <Footer />
        </>
    )
}

export default About