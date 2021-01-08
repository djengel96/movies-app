import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertShoe = payload => api.post(`/shoe`, payload)
export const getAllShoes = () => api.get(`/shoes`)
export const updateShoeById = (id, payload) => api.put(`/shoe/${id}`, payload)
export const deleteShoeById = id => api.delete(`/shoe/${id}`)
export const getShoeById = id => api.get(`/shoe/${id}`)

const apis = {
    insertShoe,
    getAllShoes,
    updateShoeById,
    deleteShoeById,
    getShoeById,
}

export default apis
