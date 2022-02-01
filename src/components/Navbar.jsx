import React from 'react';
import { Typography, Menu, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { BulbOutlined, MoneyCollectOutlined, HomeOutlined, FundOutlined } from '@ant-design/icons'

import icon from '../images/cryptocurrency.png'

export const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon}/>
                <Typography.Title level={2} className='logo' >
                    <Link to="/">Crytoverse</Link>
                </Typography.Title>
            </div>
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/home">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>

            </Menu>

        </div>
    )
};

export default Navbar;
