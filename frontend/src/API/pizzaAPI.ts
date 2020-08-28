import { default as axios } from '../core/axios'
import Notification from '../components/notification'

const pizzaAPI = {
    getPizza: async () => {
        try {
            let response = await axios.get('pizza')
            return (response)
        } catch(err) {
            if(err.response){
                throw new Error(err),
                Notification({
                    text: 'Error' + err.response.status,
                    type: 'error',
                    title: "Access denied or internal service error was received"
                  })
            } else if (err.request){
                throw new Error(err),
                Notification({
                    type: 'error',
                    title: "Server not found"
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
    createPizza: async (application: any) => {
        try {
            let response = await axios.post('/api/applications', application)
            Notification({
                text: 'Application was created!',
                type: 'success',
                title: "Success!"
              })
            return (response)
        } catch(err) {
            if(err.response){
                throw new Error(err),
                Notification({
                    text: err.response.status,
                    type: 'error',
                    title: "Access denied or internal service error was received"
                  })
            } else if (err.request){
                throw new Error(err),
                Notification({
                    type: 'error',
                    title: "Server not found"
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

export default pizzaAPI