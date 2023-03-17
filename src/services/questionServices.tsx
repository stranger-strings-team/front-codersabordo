import axios from 'axios'

const apiBase = 'http://localhost:4000/api'

export const questionServices = async() => {
        return await axios.get(apiBase + `/question`)
    }