import React from 'react'
import { Menu, Badge } from 'antd'
import {
    LogoutOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    HistoryOutlined
  } from '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar'

import {Avatar as AvatarUI} from 'evergreen-ui' 
import { NavLink } from 'react-router-dom'

type MenuComponentProps = {
    setAuthModalvisible: Function,
    logout: Function,
    setOrderFormVisible: Function,
    counter: number,
    userData: any,
    collapsed: boolean,
}

const MenuComponent: React.FC<MenuComponentProps> = (
    {
        counter, 
        setOrderFormVisible, 
        userData, 
        setAuthModalvisible, 
        collapsed, 
        logout
    }) => {
    return (
        <>
        {
            userData === null 
            ?   <Menu 
                    theme="dark" 
                    mode="inline"
                > 
                    <Menu.Item onClick={() => setAuthModalvisible(true)} key="1">
                        <Avatar icon={<UserOutlined />} />
                        { collapsed ? React.Fragment : <span style={{marginLeft: '2vw'}}>Join us</span>}   
                    </Menu.Item>
                    <Menu.Item  onClick={() => setOrderFormVisible(true)} key="2">
                        <Badge count={counter} size='small' offset={['11vw','0.7vw']}>
                            <ShoppingCartOutlined/>
                            <span>Shopping cart</span>    
                        </Badge>   
                    </Menu.Item>
                </Menu>
            :   <Menu 
                    style={{display: 'flex', alignItems: 'center', flexDirection: 'column', }}
                    theme="dark" 
                    mode="inline"
                > 
                    <AvatarUI isSolid name={userData.fullname} style={{marginTop: '1vw'}} />   
                    <Menu.Item onClick={() => setOrderFormVisible(true)} key="1">
                        <Badge  count={counter} size='small' offset={['11vw','0.7vw']}>
                            <ShoppingCartOutlined/>
                            <span>Shopping cart</span>    
                        </Badge>   
                    </Menu.Item>
                    <Menu.Item  key="2">
                        <NavLink to='/history'>
                            <HistoryOutlined />
                            <span>History</span>    
                        </NavLink>    
                    </Menu.Item>
                    <Menu.Item onClick={() => logout()} key="3">    
                        <LogoutOutlined />
                        <span>Logout</span>    
                    </Menu.Item>
                </Menu>
        }
        </>
    )
}

export default MenuComponent