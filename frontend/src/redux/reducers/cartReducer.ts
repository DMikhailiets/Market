import { CartReducerInitialStateType, PizzaInOrderType } from './../../core/types'
import redux from 'redux'
import orderAPI from '../../API/orderAPI'
import { userAPI } from '../../API'
import { setUserData } from './userReducer'

const initialState: CartReducerInitialStateType = {
    shoppingCart: {
        counter: 0,
        cart: [] ,
        totalPrice: 5
    }
}

export let cartReducer = (state:  CartReducerInitialStateType = initialState, action: any) => {
    switch(action.type){
        case 'ADD_TO_CART': {
            return {
                ...state, shoppingCart: {
                    cart: [...state.shoppingCart.cart, action.pizza],
                    counter: state.shoppingCart.counter += 1,
                    totalPrice: state.shoppingCart.totalPrice += action.pizza.pizza.costInDollars * action.pizza.quantity
                }
            }
        }
        case 'REMOVE_PIZZA': {
            let index = state.shoppingCart.cart.findIndex((item: any) => item.pizza.id === action.id)
            return{
                ...state, shoppingCart: {
                    cart: state.shoppingCart.cart.filter((item: any) => item.pizza.id !== action.id),
                    counter: state.shoppingCart.counter -= 1,
                    totalPrice: state.shoppingCart.totalPrice -= state.shoppingCart.cart[index].pizza.costInDollars * state.shoppingCart.cart[index].quantity
                } 
            }
        }
        case 'CLEAR_CART': {
            return {
                ...state,shoppingCart: {
                    counter: 0,
                    cart: [] ,
                    totalPrice: 5
                }
            }
        }
        default: 
            return state
    }
} 

export const addPizzaToCart = (pizza: PizzaInOrderType) => ({type: 'ADD_TO_CART', pizza})
export const removePizzaFromCart = (id: number) => ({type: 'REMOVE_PIZZA', id})
export const clearShoppingCart = () => ({type: 'CLEAR_CART'})

export const makeOrder = (orderData: any) => async (dispatch: redux.Dispatch) => {
    try{
        await orderAPI.makeOrder(orderData)
        let response = await userAPI.getMe()
        dispatch(setUserData(response.data))
    } catch{}
} 

export default cartReducer

