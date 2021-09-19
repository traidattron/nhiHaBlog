import React from 'react';

import {
    HeaderBlock,
    HeaderContentCover,
    NavigatorCover,
} from '../../components/Block/HeaderBlock';
import { Image } from 'antd';

import SearchCustom from '../../components/Search/Search';
import { Title, TextSmall } from '../../components/Text/Text';
import MyNavigation from '../../components/Navigation/Navigation';
const Header = () => {
    return (
        <HeaderBlock>
            <NavigatorCover>
                <Image
                    width={200}
                    src='mylogo.svg'
                    preview={{
                        src: 'mylogo.svg',
                    }}
                />
                <MyNavigation />
            </NavigatorCover>
            <HeaderContentCover>
                <SearchCustom />
                <div>
                    <Title>HAI NGƯỜI ĐI KHẮP THẾ GIAN</Title>
                    <TextSmall>THE ONLY TRIP YOU WILL REGRET IS THE ONE YOU DON’T TAKE</TextSmall>
                </div>
            </HeaderContentCover>
        </HeaderBlock>
    );
};

export default Header;
