import { FlexJustify } from './HeaderBlock';
import { Image, Button } from 'antd';
import styled from 'styled-components';
import { TextLarge } from '../Text/Text';
import DescriptionBlock from './DescriptionBlock';
import React, { useState, useEffect } from 'react';

const LeftPart = styled.div`
    padding: 5rem 95px 8rem 95px;
    background: url('blogsbg.svg');
    width: 100%;
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
    display: -ms-flexbox !important;
    display: flex !important;
`;
const CustomButton = styled(Button)`
    width: 100%;
    height: 20vh;
    font-size: 30px;
    margin-top: 25px;
`;
const BlogsBlock = (props) => {
    const [dataBlogs, setDataBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/blogs', {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => setDataBlogs(res));
    }, []);

    return (
        <LeftPart>
            {dataBlogs.length < 1 ? (
                <div>...loading</div>
            ) : (
                dataBlogs.map((blog) => (
                    <DescriptionBlock
                        key={blog.id}
                        id={blog.id}
                        title={blog.title}
                        description={blog.description}
                    />
                ))
            )}
        </LeftPart>

        // </FlexJustify>
    );
};

export default BlogsBlock;
