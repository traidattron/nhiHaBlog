import { ArticleBlock } from './Article.style'
import { Link } from 'react-router-dom'



const Article = (props) => {

    return (
        <ArticleBlock>
            <header class="entry-header">
                <h1 class="entry-title">
                    <Link to="/blog-detail">{props.title}</Link></h1>
                <div class="entry-meta">
                    <span class="posted-on"><time class="entry-date published">{props.date}</time></span>
                    <span class="comments-link"><a href="#">Leave a comment</a></span>
                </div>
                <div class="entry-thumbnail">
                    <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/30160348/sep4.jpg" alt="" />
                </div>
            </header>
            <div class="entry-summary">
                <p>
                    {props.content}
                    <Link to="/blog-detail">Read more</Link>
                </p>
            </div>
            <footer class="entry-footer">
                {/* <span class="cat-links">
            Posted in <a href="#" rel="category tag">audio</a>, <a href="#" rel="category tag">embed</a>, <a href="#" rel="category tag">media</a>
            </span> */}
            </footer>

        </ArticleBlock>


    )
}

export default Article