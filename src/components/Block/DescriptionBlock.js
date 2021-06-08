import { Card } from 'antd';
const { Meta } = Card;

const DescriptionBlock = () => {
    return (
        <Card
            hoverable
            style={{ width: '30%' }}
            cover={
                <div>
                    <img alt="example" src="description.jpg "
                    />
                </div>
            }
        >
            <Meta title="Đón hè cùng Sờ Ta Bất" description="Zelda rủ tôi đi đón hè. Đi Viện bảng tàng Mỹ Thuật. Đi ăn buffet ở trung tâm thành phố, nói ..." />
        </Card>
    )
}

export default DescriptionBlock