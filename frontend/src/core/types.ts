export type ShoppingCartType = {
    counter: number
    cart: PizzaInOrderType[] 
    totalPrice: number
}

export type CartReducerInitialStateType = {
    shoppingCart: ShoppingCartType
}
export type HomeComponentPropsType = {
    clearShoppingCart: Function
    getMe: Function
    makeOrder: Function
    removePizzaFromCart: Function
    userData: any
    shoppingCart: ShoppingCartType
}

export type PizzaPageContainerPropsType = {
    addPizzaToCart: Function
    getPizza: Function
    pizzaList: [] | null
    shoppingCart: ShoppingCartType
} 

export type PizzaPageComponentPropsType = {
    addPizzaToCart: Function
    pizzaList: [] | null
    shoppingCart: ShoppingCartType
}

export type PizzaCartComponentPropsType = {
    addPizzaToCart: Function
    key: string
    title: string
    description: string
    costInDollars: number
    photoUrlMini: string
    cartCounter: number
}

export type PizzaCartType = {
    _id: string
    title: string
    description: string
    photoUrlMini: string
    costInDollars: number
    createdAt: Date
    //photoUrl: string 
    //updatedAt: Date
    //costInEuro: number
}

export type PizzaInOrderType = {
    pizza: {
        id: string
        title: string
        costInDollars: number
    },
    quantity: number
}

export type CreateUserFormPropsType = {
    createUser: Function
    setVisible: Function
}

export type LoginFormPropsType = {
    authUser: Function
    setVisible: Function
}

export type MakeOrderFormPropsType = {
    makeOrder: Function
    setVisible: Function
    removePizzaFromCart: Function
    clearShoppingCart: Function
    visible: boolean
    cart: PizzaInOrderType[] 
    counter: number
    userData: any
    totalPrice: number
}

export type AuthModalComponentPropsType = {
    authUser: Function
    createUser: Function
    setVisible: Function
    visible: boolean
}

export  type HistoryPagePropsType = {
   userData: UserDataType
}

export type OrderType = {
    _id : string
    email : string
    adress : string
    order : string[]
    userId : string
    totalPrice : number
}

export type UserDataType = {
    _id : string
    history : OrderType[]
    email : string
    fullname : string
}

export type PizzaReducerInitialStateType = {
    pizzaList: PizzaInOrderType[] | null
}

export type UserReducerInitialState = {
    userData: null | UserDataType
}