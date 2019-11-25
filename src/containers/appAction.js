// Api consuming and all validation related code will be here
import client from '../client'
const User = {
  signUp: async (data = {}) => {
    if (data.email) {
      // Sign up api calls and handle response
      const userData = await client.signUp(data)
      return userData
    } else {
      return false
    }
  },
  inviteLoad: async data => {
    if (data.serial_key || data.source) {
      // Sign up api calls and handle response
      const userData = await client.inviteClick(data)
      return userData
    }
    return false
  }
}

export { User }
