import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'
import { Route } from 'react-router-dom'
import { Menu } from '../../../modules'
import { PizzaPage } from '../../pizzaPage'
import { HistoryPage } from '../../historyPage'
import { HomeComponentPropsType } from '../../../core/types'
//import style from './homePage.module.scss'

const { Sider } = Layout

const MakeOrderForm = React.lazy(() => import('../../../components/makeOrderForm'))
const AuthModal = React.lazy(() => import('../../../modules/authModal/containers/modal'))

const HomeComponent: React.FC<HomeComponentPropsType> = (
    {
        clearShoppingCart, 
        userData, 
        getMe, 
        makeOrder, 
        shoppingCart,
        removePizzaFromCart
    }) => {
    useEffect(() => {
        if(localStorage.token && userData === null) {
            getMe(localStorage.token)
        } 
    })
    const [isAuthModalvisible, setAuthModalvisible] = useState(false)
    const [isOrderFormVisible, setOrderFormVisible] = useState(false)
    const [ collapsed, setEditMode ] = useState(true)
    const changeEditMode = () => ! collapsed ? setEditMode(true) : setEditMode(false)
    return (
    <Layout style={{height: '100vh'}}>
        <React.Suspense fallback={React.Fragment}>
            <AuthModal visible={isAuthModalvisible} setVisible={setAuthModalvisible}/>
        </React.Suspense>
        <React.Suspense fallback={React.Fragment}>
            <MakeOrderForm 
                clearShoppingCart={clearShoppingCart} 
                totalPrice={shoppingCart.totalPrice}userData={userData} 
                removePizzaFromCart={removePizzaFromCart} 
                counter={shoppingCart.counter} 
                cart={shoppingCart.cart} 
                makeOrder={makeOrder} 
                visible={isOrderFormVisible && shoppingCart.counter > 0} 
                setVisible={setOrderFormVisible}
            />
        </React.Suspense>
        <Layout style={{height: '100vh'}}>
        <Route exact path="/home" render = { () => <PizzaPage/>}/>
        <Route path="/home/history" render = { () => <HistoryPage/>}/>
        </Layout>
        <Sider 
            reverseArrow={true}   
            collapsible  
            collapsed={collapsed} 
            onCollapse={changeEditMode} 
            onMouseEnter={() => (setEditMode(false))} 
            onMouseLeave={() => (setEditMode(true))}
        >
        <Menu 
            setOrderFormVisible={setOrderFormVisible} 
            setAuthModalvisible={setAuthModalvisible} 
            collapsed={collapsed}
        />
        </Sider>
    </Layout>
    )
}

export default HomeComponent