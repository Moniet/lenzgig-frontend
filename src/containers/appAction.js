// Api consuming and all validation related code will be here
import client from '../client'
import queryString from 'query-string'

const User = {
  signUp: async (data = {}) => {
    if (data.email) {
      const refKey = User.getRefKey()
      if (refKey) {
        data.serial_key = refKey
      }
      // Sign up api calls and handle response
      const userData = await client.signUp(data)
      return userData
    } else {
      return false
    }
  },
  inviteLoad: async () => {
    const data = {}
    const refKey = User.getRefKey()
    const scName = User.getSourceName()
    if (refKey) {
      data.serial_key = refKey
    }
    if (scName) {
      data.source_key = scName
    }
    if (data.serial_key && data.source_key) {
      // Sign up api calls and handle response
      const userData = await client.inviteClick(data)
      return userData
    }
    return false
  },
  // Get the reference key
  getRefKey: () => {
    return User.getQueryIndex('ref')
  },

  // Get query string and get the index name
  getQueryIndex: (index, full = false) => {
    let qValue
    try {
      if (window) {
        const qs = queryString.parse(window.location.search)
        if (qs[index]) {
          qValue = full ? qs : qs[index]
        }
      }
    } catch (err) {
      console.log('Error while parsing ref', err)
    }
    return qValue
  },

  // Get the source name
  getSourceName: () => {
    return User.getQueryIndex('sc')
  }
}

export { User }
