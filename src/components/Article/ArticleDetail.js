import { ArticleBlock } from './Article.style'
import { ArticleHeader } from './ArticleIngredient'
const Article = (props) => {
    return (
        <article>
            <ArticleHeader id={props.id} title={props.title} />

            <ArticleSummary content={props.content} />

            <footer class="entry-footer">
                <span class="cat-links">
                    Posted in
        <a href="#" rel="category tag">audio</a>,
        <a href="#" rel="category tag">embed</a>,
        <a href="#" rel="category tag">media</a>
                </span>
            </footer>
        </article>
    )
}

export default Article