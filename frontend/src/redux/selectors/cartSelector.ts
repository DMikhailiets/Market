import { AppState } from '../store'
import { createSelector } from "reselect"
import { ShoppingCartType } from '../../core/types'

export const fetchShoppingCart = createSelector((state: AppState) => state.cartReducer.shoppingCart , (shoppingCart: ShoppingCartType) => shoppingCart)
export const fetchCartCounter = createSelector((state: AppState) => state.cartReducer.shoppingCart.counter , (cartCounter: number) => cartCounter)


