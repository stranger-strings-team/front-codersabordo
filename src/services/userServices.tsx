import axios from 'axios'


const accessToken = sessionStorage.getItem("access_token")
const apiBase = 'https://back-codersabordo-production.up.railway.app/api'

const loginUrl = ("https://back-codersabordo-production.up.railway.app/api/auth/login")

const authAxios = axios.create({
  baseURL: apiBase,
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
})

export const getUsersRequest = async () => {
    return authAxios.get(apiBase + "/user");
}

export const postUserRequest = async (user: Object) => {
    return authAxios.post(apiBase + "/user", user);
}

export const patchUserRequest = async (id: string, user: Object) => {
    return authAxios.patch(apiBase + `/user/${id}`, user);
}

export const deleteUserById = async (id: string) => {
  return authAxios.delete(apiBase + `/user/${id}`)
}

export const authUserRequest = async (auth: Object) => {
    return authAxios.post(loginUrl, auth);
}

export const findOneById = async (id: string) => {
    try {
      const response = await authAxios.get(apiBase + "/user/" + id);
      return response.data;
    } catch (error) {
      console.log(error);
    }}