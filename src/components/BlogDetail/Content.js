import React from 'react';
import classes from './Content.module.css';
import RelatedArticle from './RelatedArticle';
const Content = (props) => {
    return <div className={classes.content}>{props.content}</div>;
};

export default Content;
