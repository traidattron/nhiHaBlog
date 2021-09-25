import React, { useEffect, useState } from 'react';
import classes from './BlogDetail.module.css';
import RelatedArticle from '../components/BlogDetail/RelatedArticle';
import useHttp from '../hooks/use-http';
import Content from '../components/BlogDetail/Content';
import Header from '../containers/Header/Header';
import { TextLarge } from '../components/Text/Text';
import { Image } from 'antd';
const BlogDetail = () => {
    const [data, setData] = useState([]);
    const config = { url: 'http://localhost:3001/RelatedArticle', method: 'GET' };
    const { isLoading, error, sendRequest: getTask } = useHttp(config, setData);
    useEffect(() => {
        getTask(setData);
    }, [getTask]);
    return (
        <>
            <Header />
            <div style={{ margin: '0 250px' }}>
                <h1>Picnic giữa Sài Gòn</h1>
                <p>
                    Chỗ này là introduction nè, giới thiệu bài viết và chém gió nè. Viết hơi dài xí
                    nha thì trang web mới đẹp í, ahihi. Không biết vậy có code đc không nữa. Thấy có
                    gì đó sai sai rồi á :)
                </p>
                <div className={classes.coverInfocontent}>
                    <img src='/avatarNhi.svg' />
                    <div className={classes.coverInfocontent__name}>Zelda</div>
                    <div className={classes.coverInfocontent__date}>Đăng 21-05-2021</div>
                </div>
            </div>
            <div style={{ margin: '0 100px' }}>
                <Image
                    width={'100%'}
                    height={'80vh'}
                    src='/description.jpg'
                    // preview={{
                    //     src: '/description.jpg',
                    // }}
                />

                <div className={classes.cover}>
                    <Content content={'nhi content'} />

                    {!isLoading &&
                        data.length > 0 &&
                        data.map((item) => (
                            <RelatedArticle key={item.id} title={item.name} dataList={item.data} />
                        ))}
                </div>
            </div>
        </>
    );
};

export default BlogDetail;
