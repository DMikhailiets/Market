import React, { useState } from 'react'
import style from './pizzaCart.module.scss'
import { Form, Button, InputNumber, Slider } from 'antd'
import { PizzaCartComponentPropsType } from '../../core/types'
 
const PizzaCart :React.FC<PizzaCartComponentPropsType> = (
    {
        title,
        description,
        costInDollars,
        photoUrlMini,
        addPizzaToCart,
        cartCounter,
    }) => {     
    const[quantity, setQuantity] = useState(1)
    const [form] = Form.useForm()  
    const onFinish = (values: any) => {
        addPizzaToCart(values)
        form.resetFields()
    }
    let onChange = (value: any) => {
        setQuantity(value);
    }
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }
    return(
        <div className={style.cardWrapper}>
            <div className={style.title}>{title}</div>
            <span className={style.description}>{description}</span>
            <div className={style.priceHeader}>{costInDollars + ' $'}</div>
            <Form
                className={style.form}
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item 
                    name="pizza"
                    initialValue={{
                        title,
                        id: new Date().toString() + cartCounter + title ,
                        costInDollars,
                    }} 
                >    
                </Form.Item>
                <Form.Item
                    name='quantity'
                    initialValue={1}
                >
                    <Slider
                        style={{width: '30vw', marginLeft: '5vw'}}
                        min={1}
                        max={5}
                        onChange={onChange}
                        value={cartCounter}
                        marks={{ 1:'1', 2:'2', 3:'3', 4:'4', 5:'5'}}
                    />
                </Form.Item>
                <Form.Item name='quantity'>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ margin: '0 1vw', width: 50 }}
                        step={1}
                        value={cartCounter}
                        onChange={onChange}
                        defaultValue={1}
                    />
                </Form.Item>
                <Form.Item style={{marginLeft: '6vw'}}>
                    <Button type="primary" htmlType="submit">
                        Add to cart
                    </Button>
                </Form.Item>
            </Form>        
            <img className={style.pizzaImage}src={photoUrlMini}/>
        </div>
    )
}
 
export default PizzaCart