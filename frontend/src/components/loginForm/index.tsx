import React from 'react'
import { Form, Input, Button } from 'antd'
import { LoginFormPropsType } from '../../core/types'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
//import style from './loginForm.module.scss'

const LoginForm: React.FC<LoginFormPropsType> = ({authUser,  setVisible}) => { 
    const [form] = Form.useForm()  
    return( 
        <Form 
            form={form}
            onFinish={
                (userData) => {
                    setVisible(false)
                    form.resetFields()
                    authUser(userData)
                }
            }
            onFinishFailed={(errorInfo: any) => {
                console.log('Failed:', errorInfo)
            }}
        >
            <Form.Item          
                name="email" 
                rules={[
                    { 
                        required: true, 
                        message: 'Email is required!'
                    }
                ]}
            >                      
                <Input 
                    allowClear={true}
                    prefix={<MailOutlined style={{color: 'grey'}} className="site-form-item-icon" />}
                    style={{marginTop: '2vw', backgroundColor: 'white'}} 
                    placeholder=' email'
                    
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password  allowClear={true} prefix={<LockOutlined style={{color: 'grey'}} className="site-form-item-icon" />} placeholder='password'/>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" style={{ width: '100%'}} type='primary' size='large'>Login</Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
