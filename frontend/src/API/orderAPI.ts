import { default as axios } from '../core/axios'
import Notification from '../components/notification'

const orderAPI = {
    makeOrder: async (orderData: any) => {
        try {
            let response = await axios.post('order', orderData)
            Notification({
                text: 'Your order has been created!',
                type: 'success',
                title: "Success!"
              })
            return (response)
        } catch(err) {
            if(err.response.status === 403 ){ 
                throw new Error(err),
                Notification({
                    text: 'Your order has been created!',
                    type: 'success',
                    title: "Success!"
                  })
            } else if (err.response){
                throw new Error(err),
                Notification({
                    text: 'error ' + err.response.status,
                    type: 'error',
                    title: 'Access denied or internal service error was received' 
                  })
            }else if (err.request){
                throw new Error(err),
                Notification({
                    type: 'error',
                    title: 'Server not found ' 
                  })
            } else {
                throw new Error(err),
                Notification({
                    text: 'Something went wrong',
                    type: 'error',
                    title: "Oops..."
                  })
            }
        }
    },
}

export default orderAPI