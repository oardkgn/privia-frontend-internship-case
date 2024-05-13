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
