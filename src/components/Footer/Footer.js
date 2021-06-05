import { TitleBlock, FlexVertical } from '../Block/HeaderBlock'
import { Image } from 'antd'
import { TextSmall } from '../Text/Text'
const Footer = props => {
    return (
        <FlexVertical>
            <Image
                width={'300px'}

                src={'footericon.svg'}
                preview={false}
            />
            <TextSmall style={{ color: 'black' }}>
                ZELDA & NEMO
            </TextSmall>

        </FlexVertical>
    )
}

export default Footer