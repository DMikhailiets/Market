import React from 'react'
import { Form, Input, Button } from 'antd'
import { CreateUserFormPropsType } from '../../core/types'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
//import style from './createApplicationForm.module.scss'

const CreateUserForm: React.FC<CreateUserFormPropsType> = ({createUser,  setVisible}) => { 
    const [form] = Form.useForm()  
    return( 
        <Form 
            form={form} 
            onFinish={
                (value) => {
                    createUser(value)
                    setVisible(false)
                    form.resetFields()
                }              
            }
        >
            <Form.Item
                id="email"
                name={["email"]} 
                hasFeedback
                rules={[
                    { 
                        required: true,
                        type: 'email',
                        message: 'Incorrect email'
                    },
                    () => ({
                        validator(rule, value) {
                            if ( !value || value.length <= 45) {
                                return Promise.resolve()
                            }
                            return Promise.reject('Email is too long! Maximym length of Email is 45 symbols')
                        },
                    })
                ]}
                >
                    <Input 
                        prefix={<MailOutlined className="site-form-item-icon"/>}
                        allowClear={true}
                        placeholder='email'
                        bordered={false}
                    />
            </Form.Item>
            <Form.Item
                name="fullname"
                hasFeedback
                rules={[
                    { 
                        required: true, 
                        message: 'Please input your username!' 
                    },
                    () => ({
                        validator(rule, value) {
                            if (!value || /^(?=.{3,})/.test(value)) {
                                return Promise.resolve()
                            }
                            return Promise.reject('Username is too short! ')
                        },
                    }),
                    () => ({
                    validator(rule, value) {
                        if ( !value || value.length <= 15) {
                            return Promise.resolve() 
                        }
                        return Promise.reject('Password is too long! Maximym length of Username is 15 symbols')
                    },
                    })
                ]}
            >  
                <Input 
                    bordered={false} 
                    allowClear={true} 
                    prefix={<UserOutlined className="site-form-item-icon" />} 
                    placeholder=' username'
                />
            </Form.Item>
            <Form.Item
                name="password"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    () => ({
                        validator(rule, value) {
                            if (!value || /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
                                return Promise.resolve() 
                            }
                            return Promise.reject('Password is too simple! Password must contain at least one number, one letter of the English alphabet in upper and lower case')
                        },
                    }),
                    () => ({
                        validator(rule, value) {
                            if ( !value || value.length <= 15) {
                                return Promise.resolve() 
                            }
                            return Promise.reject('Password is too long! Maximym length of Password is 15 symbols') 
                        },
                    })
                ]}
            >
                <Input.Password 
                    bordered={false} 
                    allowClear={true} 
                    prefix={<LockOutlined className="site-form-item-icon"/>} 
                    placeholder='password'
                />
            </Form.Item>
            <Form.Item
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password! ',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve() 
                            }
                            return Promise.reject('The two passwords that you entered do not match!') 
                        },
                    }),
                    () => ({
                        validator(rule, value) {
                            if (!value || /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
                                return Promise.resolve() 
                            }
                            return Promise.reject('Password is too simple! ') 
                        },
                    }),
                    () => ({
                        validator(rule, value) {
                            if (!value || value.length <= 15) {
                                return Promise.resolve() 
                            }
                            return Promise.reject('Username is too long! Maximym length of Password is 15 symbols') 
                        },
                    })
                ]}
                >
                <Input.Password 
                    bordered={false}   
                    allowClear={true} 
                    prefix={<LockOutlined className="site-form-item-icon" />} 
                    placeholder='confirm password' 
                />
            </Form.Item>
            <Form.Item>
                <Button 
                    htmlType="submit" 
                    style={{marginTop: '2vw', width: '100%'}} 
                    type='primary' 
                    size='large'
                > 
                    Register now 
                </Button>
            </Form.Item>
        </Form>     
    )
}

export default CreateUserForm