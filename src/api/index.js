import axios from './axios'

export default {
  async getSubsectionData (subsection) {
    const response = await axios.get('db.json')
    return response.data?.[subsection] ?? {}
  },
}
