import React from 'react';
import classes from './RelatedArticle.module.css';
import styled from 'styled-components';

const Title = styled.div`
    border: 2px solid;
    weight: bold;
`;
const RelatedArticle = (props) => {
    const { title, dataList } = props;
    return (
        <div className={classes['article-bg']}>
            <Title>{title}</Title>
            <ul className={classes.link}>
                {dataList &&
                    dataList.map((data) => (
                        <li>
                            {' '}
                            <a key={data.id} href={data.link}>
                                {data.name}
                            </a>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default RelatedArticle;
