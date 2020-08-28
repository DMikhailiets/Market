import React, { ComponentType } from 'react'
import  HomePageComponent from '../components/homePageComponent'
import { AppState } from '../../../redux/store'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchUserData, fetchShoppingCart } from '../../../redux/selectors'
import { getMe } from '../../../redux/reducers/userReducer'
import { makeOrder, removePizzaFromCart, clearShoppingCart } from '../../../redux/reducers/cartReducer'
import { ShoppingCartType } from '../../../core/types'

type HomeProps = {
    getMe: Function,
    makeOrder: Function,
    removePizzaFromCart: Function,
    clearShoppingCart: Function,
    userData: null | {},
    shoppingCart: ShoppingCartType,
}

const HomePage: React.FC<HomeProps> = (
    {
        clearShoppingCart, 
        shoppingCart, 
        getMe, 
        userData, 
        makeOrder, 
        removePizzaFromCart
    }) => {
    return <HomePageComponent
            clearShoppingCart={clearShoppingCart}
            removePizzaFromCart={removePizzaFromCart}
            userData={userData}
            getMe={getMe}
            makeOrder={makeOrder}
            shoppingCart={shoppingCart}
           />
}

export default compose<ComponentType>(
    connect((state: AppState) => ({
           userData: fetchUserData(state),
           shoppingCart: fetchShoppingCart(state) 
        }), 
        {   
            removePizzaFromCart,
            getMe,
            makeOrder,
            clearShoppingCart,
        }
    ),
    React.memo
)(HomePage)

