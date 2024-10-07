import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001',   //Para onde eu vou realizar as requisições (servidor)
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
})

export default api;