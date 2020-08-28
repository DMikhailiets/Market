import React, { useEffect, ComponentType } from 'react'
import PizzaPageComponent from '../components/pizzaPageComponent'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../../../redux/store'
import { fetchPizzaList  } from '../../../redux/selectors'
import { addPizzaToCart } from '../../../redux/reducers/cartReducer'
import { getPizza } from '../../../redux/reducers/pizzaReducer'
import { PizzaPageContainerPropsType } from '../../../core/types'
import { fetchShoppingCart } from '../../../redux/selectors'

const PizzaPageContainer: React.FC<PizzaPageContainerPropsType> = (
    {
        getPizza,
        addPizzaToCart,
        pizzaList,
        shoppingCart
    }) => {
    useEffect(() => {
        if(pizzaList === null){ 
            getPizza() 
        }
    },[pizzaList, getPizza])
    return (
        <PizzaPageComponent
            addPizzaToCart={addPizzaToCart}
            pizzaList={pizzaList}
            shoppingCart={shoppingCart}
        />
    )
}

export default compose<ComponentType>(
    connect((state: AppState) => ({
            pizzaList: fetchPizzaList(state),
            shoppingCart: fetchShoppingCart(state)
        }),
        {
            addPizzaToCart,
            getPizza,
        }
    ),
    React.memo
)(PizzaPageContainer)