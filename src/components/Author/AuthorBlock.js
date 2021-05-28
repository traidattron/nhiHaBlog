import { Card } from 'antd';
import HeaderContentAuthor from '../Header/HeaderContentAuthor'
const { Meta } = Card;
const AuthorBlock = () => {
    return (
        <Card
            hoverable
            style={{ width: 440 }}
            cover={<HeaderContentAuthor />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    )
}

export default AuthorBlock