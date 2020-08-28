import { default as axios } from '../core/axios'
import Notification from '../components/notification'

const userAPI = {
    createUser: async (userData: any) => {
        try {
            let response = await axios.post('user/registration', userData)
            Notification({
                text: 'User was created!',
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
    authUser: async (authData: any) => {
        try {
            let response = await axios.post('user/login', authData)
            Notification({
                text: "nice to meet you!)",
                type: 'success',
                title: "Success!",
                duration: 5
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
    getMe: async () => {
        try {
            let response = await axios.get('/users/me')
            return (response)
        } catch(err) {
            if(err.response.status === 403 ){
                throw new Error(err),
                Notification({
                    type: 'Success',
                    title: "Log in for more convenience!)"
                  })
                }
            else if(err.response){
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

export default userAPI
