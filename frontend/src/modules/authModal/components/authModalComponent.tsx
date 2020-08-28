import React, { useState } from 'react'
import { Modal, Typography } from 'antd'
import { CreateUserForm, LoginForm } from '../../../components'
import { AuthModalComponentPropsType } from '../../../core/types'
//import style from './authModal.module.scss'

const { Link } = Typography

const AuthModalComponent: React.FC<AuthModalComponentPropsType> = ({createUser, visible, setVisible, authUser}) => { 
    const[isRegistrationForm, setRegistrationForm] = useState(false)    
    return( 
        <Modal
            title={
            isRegistrationForm
            ? <>Registration / <Link onClick={() => setRegistrationForm(false)}href="#" >{ ' Login'}</Link></>
            : <>Login /<Link onClick={() => setRegistrationForm(true)} href="#" >{' Registration'}</Link></>
            }
            visible={visible}
            onCancel={() => setVisible(false)}
            footer={false}
        > 
            { isRegistrationForm ? <CreateUserForm createUser={createUser} setVisible={setVisible} /> : <LoginForm authUser={authUser} setVisible={setVisible}/>}
        </Modal>
    )
}

export default AuthModalComponent
