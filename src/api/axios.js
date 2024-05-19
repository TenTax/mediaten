import axios from 'axios'

const instance = axios.create()

instance.defaults.baseURL = process.env.NODE_ENV === 'production' ? '/mediaten' : '/'

export default instance
