import axios from 'axios'

const apiBase = 'http://localhost:4000/api'

const loginUrl = ("http://localhost:4000/api/auth/login")

export const getUsersRequest = async () => {
    return axios.get(apiBase);
}

export const postUserRequest = async (user: Object) => {
    return axios.post(apiBase + "/user", user);
}

export const authUserRequest = async (auth: Object) => {
    return axios.post(loginUrl, auth);
}
