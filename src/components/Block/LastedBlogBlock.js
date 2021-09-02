import { FlexJustify } from './HeaderBlock';
import { Image, Button } from 'antd';
import styled from 'styled-components';
import { TextLarge, TextThin, TitleText } from '../Text/Text';
import classes from './LastedBlogBlock.module.css';

const LeftPart = styled.div`
    background: url('lastedbg.svg');
    width: 100%;
    justify-content: center;
    text-align: center;
`;
const CustomButton = styled(Button)`
    @media only screen and (min-width: 1px) {
        width: 100%;
        height: 10vh;
        font-size: 30px;
        margin-top: 30px;
    }
    @media only screen and (min-width: 840px) {
        width: 100%;
        height: 15vh;
        font-size: 30px;
        margin-top: 25px;
    }
    @media only screen and (min-width: 1200px) {
        width: 100%;
        height: 25vh;
        font-size: 30px;
        margin-top: 30px;
    }
`;
const LastedBlogBlock = (props) => {
    // const [random, setRandom] = React.useState(0);
    return (
        <FlexJustify>
            <LeftPart>
                <TitleText className={classes.title}>
                    Picnic giữa
                    <br />
                    lòng Sài Gòn
                </TitleText>
                <div className={classes.cover}>
                    <CustomButton type='primary'>
                        <TextThin>ZELDA</TextThin>
                    </CustomButton>
                    <CustomButton type='primary'>
                        <TextThin>NEMO</TextThin>
                    </CustomButton>
                </div>
            </LeftPart>
            <Image
                width={'160vw'}
                src={'lastedblog.jpg'}
                placeholder={
                    <Image
                        preview={false}
                        src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200'
                        width={200}
                    />
                }
            />
        </FlexJustify>
    );
};

export default LastedBlogBlock;
