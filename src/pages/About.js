import React from 'react'
import {ImgAboutCover, BlogsCover} from '../style/pages.style'
import {AuthorBlock} from  '../style/pages.style'

const About = () => {
    return (
        <BlogsCover>
            	<AuthorBlock class="hentry">
            <header class="entry-header">
            <h1 class="entry-title">Zelda</h1>	
            </header>


            <div class="entry-content">
                <ImgAboutCover>
                   <img src='./aboutzelda.png' alt="bg5" class="alignright"/>

                </ImgAboutCover>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                {/* <h2 style="font-family: 'Herr Von Muellerhoff';color:#ccc;font-weight:300;">Yours, Von Muellerhoff</h2> */}
            </div>
        </AuthorBlock>
            <AuthorBlock class="hentry">
            <header class="entry-header">
            <h1 class="entry-title">Tê Tê</h1>	
            </header>


            <div class="entry-content">
                <ImgAboutCover>
                   <img src='./abouttete.png' alt="bg5" class="alignright"/>

                </ImgAboutCover>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                {/* <h2 style="font-family: 'Herr Von Muellerhoff';color:#ccc;font-weight:300;">Yours, Von Muellerhoff</h2> */}
            </div>
        </AuthorBlock>
        </BlogsCover>
    
    )
}

export default About