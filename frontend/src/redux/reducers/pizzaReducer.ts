import { PizzaReducerInitialStateType, PizzaCartType } from './../../core/types'
import redux from 'redux'
import pizzaAPI from '../../API/pizzaAPI'
import { AxiosResponse } from 'axios'

const initialState: PizzaReducerInitialStateType = {
    pizzaList: null,
}

export let pizzaReducer = (state: PizzaReducerInitialStateType = initialState, action: any) => {
    switch(action.type){
        case 'SET_PIZZA_LIST': {
            return {
                ...state, pizzaList: action.pizzaList
            }
        }
        default: 
            return state
    }
} 

const setPizzaList = (pizzaList: PizzaCartType[]) => ({type: 'SET_PIZZA_LIST', pizzaList})

export let getPizza = () => async (dispatch: redux.Dispatch) => {
   try {
        let response: AxiosResponse = await pizzaAPI.getPizza()
        dispatch(setPizzaList(response.data))
   } catch{} 
}

export default pizzaReducer