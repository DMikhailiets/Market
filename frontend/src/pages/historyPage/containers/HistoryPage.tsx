import React, { ComponentType } from 'react'
import HistoryPageComponent from '../components/HistoryPageComponent'
import { AppState } from '../../../redux/store'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { fetchUserData } from '../../../redux/selectors'
import { HistoryPagePropsType } from '../../../core/types'

let HistoryPage: React.FC<HistoryPagePropsType> = ({ userData}) => {
    return  <HistoryPageComponent userData={userData}/>
}

export default compose<ComponentType>(
    connect((state: AppState) => ({
        userData: fetchUserData(state)
        }),{}
    ),
    React.memo,
)
(HistoryPage)