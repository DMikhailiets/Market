import React from 'react'
import style from './HistoryPage.module.scss'
import { Empty, Card, PageHeader } from 'antd'
import { NavLink, Redirect } from 'react-router-dom'
import { HistoryPagePropsType } from '../../../core/types'

const HistoryPageComponent: React.FC<HistoryPagePropsType> = ({ userData }) => {
    if(!userData){
        return <Redirect to='/home'/>
    }
    return (
        <>
            <div className={style.content_wrapper}>
            <PageHeader
              className="site-page-heade"
              title="History"
              style={{backgroundSize: '450px'}}
              extra={<NavLink to='/home'>{'back >'}</NavLink>}
            /> 
            {
                <div style={{display: 'flex', flexWrap: 'wrap' }}>
                    {
                    userData.history.length === 0
                    ?   <div style={{display: 'flex', justifyContent: 'center', flexGrow: 1}}><Empty description={false}/></div> 
                    :    userData.history.map((order: any) => 
                            <Card
                                style={{  boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1204)',marginLeft: 15, marginRight: 15, marginTop: 15, width: 270 }}
                                title={order.createdAt.slice(0,10)}
                            >
                                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                                    { order.order.map((pizza: any) => <p>{pizza}</p>)}
                                </div>
                            </Card>
                        )
                    }
                </div> 
            }
        </div>
    </>
    )
}

export default HistoryPageComponent