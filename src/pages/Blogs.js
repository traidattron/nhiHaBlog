import React from 'react'
import Article from '../components/Article/Article'
import { BlogsCover } from '../style/pages.style'
import { useQuery, gql } from '@apollo/client'
import Spinner from '../components/spinner/Spinner'

const GET_ALL_ARTICLES = gql`
    query allBlogs{
        allBlog{
            title
            content
            id
            public
            user{
                username
                name
            }
        }
    }
`

const Blogs = () => {
    const { error, loading, data } = useQuery(GET_ALL_ARTICLES)
    console.log(data)
    return (
        <div>
            {loading ?
                <Spinner /> :
                <BlogsCover> {data?.allBlog?.map(article => <Article
                    title={article.title}
                    content={article.content}
                    date={article.date}
                />)}
                </BlogsCover>
            }

        </div>

    )
}

export default Blogs