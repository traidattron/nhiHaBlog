import { FlexJustify } from './HeaderBlock'
import { Image, Button } from 'antd';
import styled from 'styled-components'
import { TextLarge } from '../Text/Text'
import DescriptionBlock from './DescriptionBlock'

const LeftPart = styled.div`
    padding: 5rem 95px 8rem 95px;
    background: url('blogsbg.svg');
    width: 100%;    
    -ms-flex-pack: justify!important;
    justify-content: space-between!important;
    display: -ms-flexbox!important;
    display: flex!important;
`
const CustomButton = styled(Button)`
    width: 100%;
    height: 20vh;
    font-size: 30px;
    margin-top: 25px;
`
const BlogsBlock = (props) => {
    // const [random, setRandom] = React.useState(0);
    return (

        <LeftPart>
            <DescriptionBlock />
            <DescriptionBlock />
            <DescriptionBlock />
        </LeftPart>

        // </FlexJustify>
    )

}

export default BlogsBlock