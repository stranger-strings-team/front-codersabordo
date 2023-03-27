import axios from 'axios'

const apiBase = 'http://localhost:4000/api'

const loginUrl = ("http://localhost:4000/api/auth/login")

export const getUsersRequest = async () => {
    return axios.get(apiBase);
}

export const postUserRequest = async (user: Object) => {
    return axios.post(apiBase + "/user", user);
}

export const patchUserRequest = async (user: Object, id) => {
    return axios.patch(apiBase + `/${id}`, user);//Falta terminar esta funcionalidad
}
;
export const patchUserResponse = async (answer: Object, id: any, token: any) => {
    console.log(answer.openQuestion);
    // recuperar el objeto a traves de la id
    let user = axios.get(apiBase + `/user/${id}`);
    // nueva response la añades al objeto que viene de la anterior consulta
    let updatedUser = {...user, openQuestion: answer};
    // enivamos a la api el objeto actualizado
    return axios.patch(apiBase + `/user/${id}`, updatedUser, {headers: 
        {'Authorization': `Bearer ${token}`}
    });//Falta terminar esta funcionalidad
}

export const authUserRequest = async (auth: Object) => {
    return axios.post(loginUrl, auth);
}
