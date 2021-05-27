import { ArticleBlock } from './Article.style'
import { ArticleHeader, ArticleSummary, ArticleFooter } from './ArticleIngredient'

const Article = (props) => {

    return (
        <ArticleBlock>
            <ArticleHeader id={props.id} title={props.title} />
            <ArticleSummary content={props.content} />
            <ArticleFooter />
        </ArticleBlock>
    )
}

export default Article