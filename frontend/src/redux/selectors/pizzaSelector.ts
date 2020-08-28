import { PizzaCartType } from './../../core/types';
import { AppState } from '../store'
import { createSelector } from "reselect"

export const fetchPizzaList = createSelector((state: AppState) => state.pizzaReducer.pizzaList , (pizzaList: PizzaCartType ) => pizzaList)


