import axios from './axios'

export default {
  async getSubsectionData (subsection) {
    const response = await axios.get(`/${subsection}`)
    return response.data
  },
}
