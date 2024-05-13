import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const getUsers = async () => {
    try {
        const response = await api.get(`/users`);
        return response
    } catch (e) {
        return false
    }

}

export const createUser = async (payload) => {
    const newUser = { ...payload }
    try {
        const response =  await api.post(`/users`, newUser)
        return response

    } catch (e) {
        return false
    }

}

export const getUser = async (id, payload) => {
    try{
        const response = await api.get(`/users/${id}`).then(res => res.data)
        return response
    }catch(e){

        const response = e.response.data
        return response
    }
   
 
}

export const updateUser = async (id, payload) => {
    try{
        const response = await api.put(`/users/${id}`, payload).then(res => res.data)
        return response
    }catch(e){

        const response = e.response.data
        return response
    }
   
 
}

export const deleteUser = async (id) => {
    try {
        const response = await api.delete(`/users/${id}`).then(res => res.data)
        return response
    } catch (e) {
        const response = e.response.data
        return response
    }

}
