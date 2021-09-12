import { Card } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;

const DescriptionBlock = (props) => {
    return (
        <Card
            hoverable
            style={{ width: '30%' }}
            cover={
                <div style={{ padding: '10px' }}>
                    <Link to='/blog-detail/${props.id}'>
                        <img alt='examplefalse' src='description.jpg ' />
                    </Link>
                </div>
            }
        >
            <Meta title={props.title} description={props.description} />
        </Card>
    );
};

export default DescriptionBlock;
