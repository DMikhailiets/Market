import { UserReducerInitialState } from './../../core/types';
import redux from 'redux'
import userAPI from '../../API/userAPI'
import crypto from 'crypto-js'
import { UserDataType } from '../../core/types'
import { AxiosResponse } from 'axios';

const initialState: UserReducerInitialState = {
    userData: null,
}

export let userReducer = (state: UserReducerInitialState = initialState, action: any) => {
    switch(action.type){
        case 'SET_USER_DATA': {
            return {
                ...state, userData: action.userData
            }
        }
        default: 
            return state
    }
} 

export const setUserData = (userData: UserDataType) => ({type: 'SET_USER_DATA', userData})

export const getMe = () => async (dispatch: redux.Dispatch) => {
    try {
        let response: AxiosResponse = await userAPI.getMe()
        dispatch(setUserData(response.data))
    } catch{}
}

export const logout = () => async () => {
    window.localStorage.removeItem('token')
    window.location.reload()
}

export const authUser = (authData: { email: string, password: string }) => async () =>  {
    try {
        let response: any = await userAPI.authUser({
            email: authData.email, 
            password: crypto.SHA256(authData.password).toString()
        })
        window.localStorage.setItem("token", response.data.token)
        window.location.reload()
        
    } catch(err){
        console.warn(err)
    }
}

export const createUser = (regData:any) => async () => {
    try{
        await userAPI.createUser({
            email: regData.email, 
            fullname: regData.fullname, 
            password: crypto.SHA256(regData.password).toString()
        })
    } catch(err){
        console.warn(err)
    }   
}

export default userReducer