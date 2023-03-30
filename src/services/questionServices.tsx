import axios from 'axios'

const accessToken = sessionStorage.getItem("access_token")
const apiBase = 'http://localhost:4000/api'

const authAxios = axios.create({
    baseURL: apiBase,
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})

export const getQuestions = async () => {
    return await authAxios.get(apiBase + `/question`)
}

export const getOneQuestion = async (id: string | null) => {
    return await authAxios.get(apiBase + `/question/${id}`)
}

export const postQuestion = async (question: Object) => {
    return authAxios.post(apiBase + `/question`, question);
}

export const deleteOneQuestion = async (id: string | null | undefined) => {
    return await authAxios.delete(apiBase + `/question/${id}`)
}