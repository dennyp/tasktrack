import axios from 'axios'

const URL = process.env.REACT_APP_API_URL
console.log('🚀 ~ URL:', URL)

export const fetchTasks = async () => {
  try {
    const response = await axios.get(`${URL}`)
    return response.data
  } catch (error) {
    console.error('error fetching tasks', error)
    throw error
  }
}
