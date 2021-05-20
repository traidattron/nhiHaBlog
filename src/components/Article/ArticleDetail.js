import { ArticleBlock } from './Article.style'

const Article = (props) => {
    return (
        <article>
            <header class="entry-header">
                <h1 class="entry-title">Somewhere in time</h1>
                <div class="entry-meta">
                    <span class="posted-on"><time class="entry-date published">April 6, 2016</time></span>
                    <span class="comments-link"><a href="#">Leave a comment</a></span>
                </div>
                <div class="entry-thumbnail">
                    <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/30160348/sep4.jpg" alt="" />
                </div>
            </header>
            <div class="entry-content">
                <p>
                    When Mary Lennox was sent to Manor to live with her uncle everybody said she was the most disagreeablelooking child ever seen. It was true, too. She had a little thin face and a little thin body, thin light hair and a sour expression.
            </p>
                <p>
                    Her hair was yellow, and her face was yellow because she had been born in India and had always been ill in one way or another. Her father had held a position under the English Government and had always been busy and ill himself, and her mother had been a great beauty who cared only to go to parties and amuse herself with gay people. She had not wanted a little girl at all, and when Mary was born she handed her over to the care of an Ayah, who was made to understand that if she wished to please the Mem Sahib she must keep the child out of sight as much as possible.
            </p>
                <p>
                    So when she was a sickly, fretful, ugly little baby she was kept out of the way, and when she became a sickly, fretful, toddling thing she was kept out of the way also. She never remembered seeing familiarly anything but the dark faces of her Ayah and the other native servants, and as they always obeyed her and gave her her own way in everything, because the Mem Sahib would be angry if she was disturbed by her crying, by the time she was six years old she was as tyrannical and selfish a little pig as ever lived.
            </p>
                <p>
                    The young English governess who came to teach her to read and write disliked her so much that she gave up her place in three months, and when other governesses came to try to fill it they always went away in a shorter time than the first one. So if Mary had not chosen to really want to know how to read books she would never have learned her letters at all.
            </p>
            </div>

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