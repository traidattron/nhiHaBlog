import { LayoutCover, ContentCover } from './Layout2.style'
import Navigation from '../../components/Navigation/Navigation'
import HeaderLayout from '../../components/Header/HeaderLayout'
import AuthorBlock from '../../components/Author/AuthorBlock'
const LayoutBlog2 = (props) => {
  return (
    <LayoutCover >
      <ContentCover>
        <HeaderLayout />
        <Navigation />

        {props.children}
        {/* <AuthorBlock /> */}
      </ContentCover>

    </LayoutCover>
  )

}

export default LayoutBlog2
