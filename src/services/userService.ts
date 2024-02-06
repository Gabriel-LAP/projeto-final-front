import { Client } from '../types/Client';
import { Orders } from '../types/Orders';
import { SubmitFormLogin } from '../types/SubmitForm';
import { User } from '../types/User';
import dataBase from './dataBase'

const token = localStorage.getItem('token')?.split('"').join(''); 
console.log(token)

const config = {
    headers: { Authorization: `Bearer ${token}` }
};



async function getAllUsers(): Promise<User[]> { 
    try {
        const response = await dataBase.get('/users/list/all', config)
        return response.data

    } catch (error) {
        console.log(error)
        throw error
    }
    
}

async function getUserById(id: string): Promise<User> {
    try {
        const response = await dataBase.get(`/users/list/${id}`, config)
        // console.log(response.data)
        return response.data
        
    } catch (error) {
        console.log(error)
        throw error
    }
}

async function loginUser(data: SubmitFormLogin) {
    try {
        const response = await dataBase.post('/users/login', data)
        // console.log(response.data)
        return response.data
        
    } catch (error) {
        console.log(error)
        throw error
    }
}

async function getAllClients():Promise<Client[]> {
    try {
        const response = await dataBase.get('/users/list/client/all', config)
        return response.data
        
    } catch (error) {
        console.log('getAllClients deu erro: ',error)
        throw error
    }
    
}

async function getClientById(id:string): Promise<Client> {
    try {
        const response = await dataBase.get(`/users/list/client/${id}`, config)
        return response.data
        
    } catch (error) {
        console.log(error)
        throw error
    }
    
}

async function updateClient(data: Client): Promise<Client> {
    try {
        // console.log('updateClient log:', data)
        const id = data._id
        const response = await dataBase.put(`/clients/update/${id}`,data, config)
        console.log('updateClient log:', response.data)
        return response.data
        
    } catch (error) {
        console.log(error)
        throw error
    }
}

async function createClient(data: Client): Promise<Client> {
    try {
        // console.log('createClient log:', data)
        const response = await dataBase.post('/users/create/client',data, config)
        console.log('createClient log:', response.data)
        return response.data
        
    } catch (error) {
        console.log(error)
        throw error
    }
    
}

async function deleteClient(data: Client): Promise<Client> {
    
    try {
        console.log('deleteClient log:', data)
        const id = data._id
        const response = await dataBase.delete(`/users/delete/client/${id}`, config)
        console.log('deleteClient log:', response.data)
        return response.data
        
    } catch (error) {
        console.log(error)
        throw error
    }
}

async function listOrders() {
    try {
        const response = await dataBase.get('/orders/list/all', config)
        // console.log('listoOrdem Tokem: ', config)
        return response.data
        
    } catch (error) {
        console.log(error)
        throw error
    }
}

async function updateOrder(data: Orders): Promise<Orders> {
    try {
        console.log('updateOrder log:', data)
        const id = data._id
        const response = await dataBase.put(`/orders/update/${id}`,data, config)
        console.log('updateOrder log:', response.data)
        return response.data
        
    } catch (error) {
        console.log(error)
        throw error
    }
}

export {
    getAllUsers,
    getUserById,
    loginUser,
    getAllClients,
    getClientById,
    updateClient,
    createClient,
    deleteClient,
    listOrders,
    updateOrder
}