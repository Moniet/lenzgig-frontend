// Api consuming and all validation related code will be here
import client from '../client'
const User = {
  signUp: async (data = {}) => {
    const userData = await client.signUp(data)
    return userData
    // Sign up api calls and handle response
  }
}

export { User }
