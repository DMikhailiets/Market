import React, { useState } from 'react'
import { Form, Input, Button, Modal, Badge, Radio } from 'antd'
import { DeleteTwoTone, EuroCircleOutlined, DollarCircleOutlined} from '@ant-design/icons'
import { MakeOrderFormPropsType } from '../../core/types'
//import style from 'makeOrderForm.module.scss'

const MakeOrderForm: React.FC<MakeOrderFormPropsType> = (
    { 
        clearShoppingCart, 
        totalPrice, 
        userData, 
        visible, 
        setVisible, 
        makeOrder, 
        counter, 
        cart, 
        removePizzaFromCart,
    }) => { 
    const[currency, setCurrency] = useState(1)
    const [form] = Form.useForm()  
    const order = cart.map((pizza: any) => `${pizza.pizza.title} x ${pizza.quantity}`)
    const onFinish = (values: any) => {
        makeOrder(values)
        form.resetFields()
        clearShoppingCart()
        setVisible(false)
    }
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo)
    }
    let orderArray = cart.map((pizza: any) => <p> {`${pizza.pizza.title} X ${pizza.quantity}`}<DeleteTwoTone  onClick={() => removePizzaFromCart(pizza.pizza.id)}/></p>)
    return( 
        <Modal
            title={<Badge count={counter} offset={['11vw','0.6vw']} size='small'>Shopping cart</Badge>}
            visible={visible}
            onCancel={() => setVisible(false)}
            footer={false}
        > 
        {
            userData === null
        ? <Form
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                {orderArray}
                <Form.Item
                    label="Your name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter your name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                    name='email' 
                    label="Email" 
                    rules={[{ type: 'email' }, { required: true, message: 'Please enter your email!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                    name='phoneNumber' 
                    label="Phone number" 
                    rules={[
                        { 
                            required: true, 
                            message: 'Please enter phone number!' 
                        },
                        () => ({
                            validator(rule, value) {
                                if (!value || /^([\d])*$/.test(value)) {
                                    return Promise.resolve()
                                }
                                return Promise.reject('Number is required!')
                            }
                        })
                    ]}
                >
                    <Input maxLength={12} minLength={11}/>
                </Form.Item>
                <Form.Item 
                    name='adress' 
                    label="Delivery adress" 
                    rules={[{ required: true, message: 'Please enter delivery adress!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                    name="currency" 
                    label="currency" 
                    initialValue={1}
                >
                    <Radio.Group>
                        <Radio onChange={() => setCurrency(1)}value={1}><EuroCircleOutlined /></Radio>
                        <Radio onChange={() => setCurrency(0.84)}value={2}><DollarCircleOutlined /></Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="Delivery price: "
                    name="deliveryPrice"
                    initialValue={5}
                >
                    {5 + ' '} {currency === 1 ?  <DollarCircleOutlined /> :  <EuroCircleOutlined />}
                </Form.Item>
                <Form.Item
                    name="order"
                    initialValue={order}
                >
                </Form.Item>
                <Form.Item
                    name="userId"
                    initialValue={userData !== null ? userData._id : null}
                >
                </Form.Item>
                <Form.Item
                    label="Total price: "
                    name="totalPrice"
                    initialValue={totalPrice}
                >
                    <h1>
                        {(totalPrice * currency + ' ').slice(0,5)} { currency === 1 ? <DollarCircleOutlined /> : <EuroCircleOutlined />}
                    </h1>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Make an order
                    </Button>
                </Form.Item>
                </Form>    
        : <Form
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                {orderArray} 
                <Form.Item 
                    name='phoneNumber' 
                    label="Phone number" 
                    rules={[
                        { 
                            required: true, 
                            message: 'Please enter phone number!' 
                        },
                        () => ({
                            validator(rule, value) {
                                if (!value || /^([\d])*$/.test(value)) {
                                    return Promise.resolve()
                                }
                                return Promise.reject('Number is required!')
                            }
                        })
                    ]}
                >
                    <Input maxLength={12} minLength={11}/>
                </Form.Item>
                <Form.Item 
                    name='adress' 
                    label="Delivery adress" 
                    rules={[{ required: true, message: 'Please enter delivery adress!' }]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item 
                    name="currency" 
                    label="currency" 
                    initialValue={1}
                >
                    <Radio.Group >
                        <Radio onChange={() => setCurrency(1)}value={1}><EuroCircleOutlined /></Radio>
                        <Radio onChange={() => setCurrency(0.84)}value={2}><DollarCircleOutlined /></Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="Delivery price: "
                    name="deliveryPrice"
                    initialValue={5}
                >
                {5 + ' '}{currency === 1 ? <DollarCircleOutlined /> : <EuroCircleOutlined />}
                </Form.Item>
                <Form.Item
                    name="order"
                    initialValue={order}
                >
                </Form.Item>
                <Form.Item
                    name="userId"
                    initialValue={userData !== null ? userData._id : null}
                >
                </Form.Item>
                <Form.Item
                    name="name"
                    initialValue={userData.fullName}
                >
                </Form.Item>
                <Form.Item 
                    name='email' 
                    initialValue={userData.email}
                >
                </Form.Item>
                <Form.Item
                    label="Total price: "
                    name="totalPrice"
                    initialValue={totalPrice}
                >
                    <h1>
                    { totalPrice * currency + ' '} { currency === 1 ? <DollarCircleOutlined /> : <EuroCircleOutlined />}
                    </h1>
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Make an order
                    </Button>
                </Form.Item>
            </Form>            
        }     
        </Modal>  
    )
}

export default MakeOrderForm