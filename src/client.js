// All API calls

import axios from 'axios'

import Conf from './config'

// 20 seconds timeout for APIs
const API_TIMEOUT = 20000

// common headers for APIs
const API_HEADERS = {
  'Content-Type': 'application/json'
}

const api = axios.create({
  baseURL: Conf.API_URL,
  timeout: API_TIMEOUT,
  headers: API_HEADERS
})

// When calling get method for the API
// const resolveData = async (...args) => {
//   try {
//     const response = await api.get(...args)
//     if (response.data) {
//       return response.data
//     }
//     return response
//   } catch (error) {
//     console.log('Error in API calling', error)
//     return null
//   }
// }

const resolvePost = async (...args) => {
  try {
    const response = await api.post(...args)
    if (response.data) {
      return response.data
    }
    return response
  } catch (error) {
    console.log('Error in API calling', error)
    return null
  }
}

// catalog methods

export default {
  signUp: (data = {}) => resolvePost(Conf.signUp, data)
}
