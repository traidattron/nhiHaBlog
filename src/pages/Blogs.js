import React from 'react'
import Article from '../components/Article/Article'
import { BlogsCover } from '../style/pages.style'

const Blogs = () => {
    return (
        <BlogsCover>
            <Article />
            <Article />
            <Article />
            <Article />
        </BlogsCover>

    )
}

export default Blogs