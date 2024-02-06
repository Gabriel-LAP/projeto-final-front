import axios from 'axios';

const dataBase = axios.create({ baseURL: 'http://localhost:3000' })

export default dataBase