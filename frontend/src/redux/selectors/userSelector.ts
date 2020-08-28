import { UserDataType } from './../../core/types';
import { AppState } from '../store'
import { createSelector } from "reselect"

export const fetchUserData = createSelector((state: AppState) => state.userReducer.userData , (userData: UserDataType) => userData)

