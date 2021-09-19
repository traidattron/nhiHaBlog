import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const { SubMenu } = Menu;
const Navigation = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navigationStyle = {
        zIndex: 1,
        width: '100%',
        background: 'rgba(12, 0, 0, 0.43)',
        display: 'flex',
        position: scrollPosition > 50 ? 'fixed' : '',
        top: scrollPosition > 50 ? '0' : '',
        color: 'white',
        fontWeight: 700,
        fontSize: 18,
    };

    const iconStyle = {
        fontSize: 20,
    };

    return (
        <Menu size='large' mode='horizontal' style={navigationStyle} defaultSelectedKeys={['home']}>
            <Menu.Item key='home' icon={<HomeOutlined style={iconStyle} />}>
                HOME
                <Link to='/' />
            </Menu.Item>
            <Menu.Item key='photos' icon={<AppstoreOutlined style={iconStyle} />}>
                <Link to='/photos'>PHOTOS</Link>
            </Menu.Item>
            <SubMenu key='SubMenu' icon={<SettingOutlined style={iconStyle} />} title='BLOGS'>
                <Menu.Item key='setting:1'>Zelda Stories</Menu.Item>
                <Menu.Item key='setting:4'>Nemo Games</Menu.Item>
            </SubMenu>

            <Menu.Item key='about' icon={<HomeOutlined style={iconStyle} />}>
                ABOUT
                <Link to='/about' />
            </Menu.Item>

            <Menu.Item key='hi' style={{ marginLeft: 'auto' }}>
                HI - FRIENDS
            </Menu.Item>
        </Menu>
        // <nav id='site-navigation' class='main-navigation'>
        //     <button class='menu-toggle'>Menu</button>
        //     <a class='skip-link screen-reader-text' href='#content'>
        //         Skip to content
        //     </a>
        //     <div class='menu-menu-1-container'>
        //         <ul id='menu-menu-1' class='menu'>
        //             <li>
        //                 {' '}
        //                 <Link to='/home'>Home</Link>
        //             </li>
        //             <li>
        //                 {' '}
        //                 <Link to='/blog'>Blog</Link>
        //             </li>
        //             <li>
        //                 {' '}
        //                 <Link to='/about'>About</Link>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    );
};

export default Navigation;
