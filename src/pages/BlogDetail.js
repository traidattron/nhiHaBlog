import React, { useEffect, useState } from 'react';
import classes from './BlogDetail.module.css';
import RelatedArticle from '../components/BlogDetail/RelatedArticle';
import useHttp from '../hooks/use-http';
import Content from '../components/BlogDetail/Content';
const BlogDetail = () => {
    const [data, setData] = useState([]);
    const config = { url: 'http://localhost:3001/RelatedArticle', method: 'GET' };
    const { isLoading, error, sendRequest: getTask } = useHttp(config, setData);
    useEffect(() => {
        getTask(setData);
    }, [getTask]);
    return (
        <>
            <header>this is header</header>
            <div className={classes.cover}>
                <Content content={'nhi content'} />

                {!isLoading &&
                    data.length > 0 &&
                    data.map((item) => (
                        <RelatedArticle key={item.id} title={item.name} dataList={item.data} />
                    ))}
            </div>
        </>
    );
};

export default BlogDetail;
