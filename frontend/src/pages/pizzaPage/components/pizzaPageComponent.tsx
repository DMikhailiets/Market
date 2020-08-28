import React from 'react'
import style from './pizzaPage.module.scss'
import { PizzaCart } from '../../../components'
import { Layout } from 'antd'
import { PizzaPageComponentPropsType, PizzaCartType } from '../../../core/types'

const PizzaPageComponent: React.FC<PizzaPageComponentPropsType> = ({
    addPizzaToCart,
    pizzaList,
    shoppingCart
}) => {
    return (
        <Layout className={style.pizzaComponentsWrapper}> 
        {(pizzaList !== null) 
            ? pizzaList.map((pizza: PizzaCartType) => {
                return (
                    <PizzaCart
                        cartCounter={shoppingCart.counter}
                        addPizzaToCart={addPizzaToCart}                                                    
                        key={pizza._id}
                        title={pizza.title}
                        description={pizza.description}
                        costInDollars={pizza.costInDollars}
                        photoUrlMini={pizza.photoUrlMini}
                    />)
                })
            : React.Fragment
        }
        </Layout>
    )
}

export default PizzaPageComponent