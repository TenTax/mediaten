import axios from 'axios'

const instance = axios.create()

instance.defaults.baseURL = 'https://my-json-server.typicode.com/TenTax/mediaten'

export default instance
