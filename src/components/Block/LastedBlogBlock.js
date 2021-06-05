import { FlexJustify } from './HeaderBlock'
import { Image, Button } from 'antd';
import styled from 'styled-components'
import { TextLarge } from '../Text/Text'
const LeftPart = styled.div`
    background: url('lastedbg.svg');
    width: 100%;
 
    
`
const CustomButton = styled(Button)`
    width: 100%;
    height: 20vh;
    font-size: 30px;
    margin-top: 25px;
`
const LastedBlogBlock = (props) => {
    // const [random, setRandom] = React.useState(0);
    return (
        <FlexJustify>
            <LeftPart>
                <TextLarge style={{ marginBottom: '60px', marginTop: '50px' }}>
                    Picnic giữa
                    <br />
                    lòng Sài Gòn
                </TextLarge>
                <CustomButton type="primary">ZELDA</CustomButton>
                <CustomButton type="primary">NEMO</CustomButton>
            </LeftPart>
            <Image
                width={'160vw'}

                src={'lastedblog.jpg'}
                placeholder={
                    <Image
                        preview={false}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                        width={200}
                    />
                }
            />
        </FlexJustify>
    )

}

export default LastedBlogBlock