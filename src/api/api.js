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
