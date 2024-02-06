import { Client } from '../types/Client';
import { NewOrder, Orders } from '../types/Orders';
import { Part } from '../types/Parts';
import { SubmitFormLogin } from '../types/SubmitForm';
import { User } from '../types/User';
import { PartCategory } from '../types/partCategory';
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
               console.log(error.response.data)

        throw error
    }
    
}

async function getUserById(id: string): Promise<User> {
    try {
        const response = await dataBase.get(`/users/list/${id}`, config)
        // console.log(response.data)
        return response.data
        
    } catch (error) {
               console.log(error.response.data)

        throw error
    }
}

async function getUserByName(name:string): Promise<User> {
    try {
        const response = await dataBase.get(`/users/list/name?name=${name}`, config)
        return response.data
        
    } catch (error) {
               console.log(error.response.data)

        throw error
    }
    
}

async function createUser(user: User): Promise<User> {
    try {
        const response = await dataBase.post('/users/create', user, config)
        // console.log(response.data)
        return response.data
        
    } catch (error) {
               console.log(error.response.data) 
               throw error
               
    }
}

async function updateUser(user: User): Promise<User> {
    try {
        const id = user._id
        const response = await dataBase.put(`/users/update/${id}`, user, config)
        // console.log(response.data)
        return response.data
        
    } catch (error) {
               console.log(error) 
               throw error
               
    }
}

async function deleteUser(user: User): Promise<User> {
    try {
        const id = user._id
        const response = await dataBase.delete(`/users/delete/${id}`, config)
        // console.log(response.data)
        return response.data
        
    } catch (error) {
               console.log(error.response.data) 
               throw error
               
    }
}



async function loginUser(data: SubmitFormLogin) {
    try {
        const response = await dataBase.post('/users/login', data)
        // console.log(response.data)
        return response.data
        
    } catch (error) {
               console.log(error.response.data)

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
                console.log(error.response.data)

        throw error
    }
    
}

async function getClientByName(name:string): Promise<Client> {
    try {
        const response = await dataBase.get(`/users/list/client/name?name=${name}`, config)
        return response.data
        
    } catch (error) {
               console.log(error.response.data)

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
               console.log(error.response.data)

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
               console.log(error.response.data)

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
               console.log(error.response.data)

        throw error
    }
}

async function listOrders() {
    try {
        const response = await dataBase.get('/orders/list/all', config)
        // console.log('listoOrdem Tokem: ', config)
        return response.data
        
    } catch (error) {
               console.log(error.response.data)

        throw error
    }
}

async function getOrderByName(name:string): Promise<Orders> {
    try {
        const response = await dataBase.get(`/orders/list/name?name=${name}`, config)
        return response.data
        
    } catch (error) {
               console.log(error.response.data)

        throw error
    }
    
}

async function getOrderByStatus(status:string): Promise<Orders> {
    try {
        const response = await dataBase.get(`/orders/list/status?status=${status}`, config)
        return response.data
        
    } catch (error) {
               console.log(error.response.data)

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
               console.log(error.response.data)

        throw error
    }
}

async function createOrder(data:NewOrder) {
    try {
        // console.log('createOrder log:', data)
        const response = await dataBase.post('/orders/create',data, config)
        console.log('createOrder log:', response.data)
        return response.data
        
    } catch (error) {
        console.log(error.response.data)
        throw error
    }
    
}

async function deleteOrder(data:Orders) {
    try {
        // console.log('deleteOrder log:', data)
        const id = data._id
        const response = await dataBase.delete(`/orders/delete/${id}`, config)
        console.log('deleteOrder log:', response.data)
        return response.data
        
    } catch (error) {
               console.log(error.response.data)

        throw error
    }
}

async function getAllParts() {
    try {
        const response = await dataBase.get(`/parts/list/all`, config)
        return response.data
    } catch (error) {
        console.log(error.response.data)

        throw error
    }
}

async function getPartById(id:string): Promise<Part> {
    try {
        const response = await dataBase.get(`/part/list/${id}`, config)
        return response.data
        
    } catch (error) {
                console.log(error.response.data)

        throw error
    }
    
}

async function getPartByCategory(category: PartCategory): Promise<Part> {
    try {
        const id = category._id
        const response = await dataBase.get(`/parts/list/category/${id}`, config)
        return response.data
        
    } catch (error) {
        console.log(error.response.data)
        
        throw error
    }
}

async function getPartByName(name:string): Promise<Part> {
    try {
    
        const response = await dataBase.get(`/users/list/client/name?name=${name}`, config)
        return response.data
        
    } catch (error) {
               console.log(error.response.data)

        throw error
    }
    
}



async function updatePart(data: Part): Promise<Part> {
    try {
        const id = data._id
        console.log('dados para atualizar', data)
        const response = await dataBase.put(`/parts/update/${id}`,data, config)
        // console.log('updatePart log:', response.data)
        return response.data
        
    } catch (error) {
               console.log(error.response.data)

        throw error
    }
}

async function createPart(data: Part): Promise<Part> {
    try {
        console.log('createClient log:', data)
        const response = await dataBase.post('/parts/create',data, config)
        console.log('createPart log:', response.data)
        return response.data
        
    } catch (error) {
        console.log(error.response.data)
        throw error
    }
    
}

async function deletePart(data: Part): Promise<Part> {
    
    try {
        console.log('deletePart log:', data)
        const id = data._id
        const response = await dataBase.delete(`/parts/delete/${id}`, config)
        console.log('deleteClient log:', response.data)
        return response.data
        
    } catch (error) {
               console.log(error.response.data)

        throw error
    }
}

async function getAllCategory() {
    try {
        const response = await dataBase.get(`/parts/category/all`, config)
        console.log('Get all category log:', response.data)

        return response.data

    } catch (error) {
        console.log(error.response.data)
        throw error
        
    }
}

async function getCategoryById(id:string): Promise<PartCategory> {
    try {
        const response = await dataBase.get(`/parts/category/${id}`, config)
        console.log('Get category log:', response.data)
        return response.data
        
    } catch (error) {
        console.log(error.response.data)
        throw error
        
    }
}

async function getCategoryByName(name:string): Promise<PartCategory> {
    try {
        const response = await dataBase.get(`/parts/category/name?name=${name}`, config)
        console.log('Get category log:', response.data)
        return response.data
        
    } catch (error) {
        console.log(error.response.data)
        throw error
        
    }
}

async function updateCategory(data: PartCategory): Promise<PartCategory> {
    try {
        // console.log('updateClient log:', data)
        const id = data._id
        const response = await dataBase.put(`/parts/category/update/${id}`,data, config)
        console.log('updateCategory log:', response.data)
        return response.data
        
    } catch (error) {
        console.log(error.response.data)     
        throw error

    }

}

async function createCategory(data: PartCategory): Promise<PartCategory> {
    try {
        // console.log('createClient log:', data)
        const response = await dataBase.post('/parts/category/create',data, config)
        console.log('createCategory log:', response.data)
        return response.data
        
    } catch (error) {
        console.log(error.response.data)     
        throw error
    }
}

async function deleteCategory(data: PartCategory): Promise<PartCategory> {
    
    try {
        console.log('deleteCategory log:', data)
        const id = data._id
        const response = await dataBase.delete(`/parts/category/delete/${id}`, config)
        console.log('deleteCategory log:', response.data)
        return response.data
        
    } catch (error) {
        console.log(error.response.data)     
        throw error
    }
}

export {
    loginUser,
    getAllUsers,
    getUserById,
    getUserByName,
    createUser,
    updateUser,
    deleteUser,
    getAllClients,
    getClientById,
    getClientByName,
    updateClient,
    createClient,
    deleteClient,
    listOrders,
    getOrderByName,
    getOrderByStatus,
    updateOrder,
    createOrder,
    deleteOrder,
    getAllParts,
    getPartById,
    getPartByCategory,
    getPartByName,
    updatePart,
    createPart,
    deletePart,
    getAllCategory,
    getCategoryById,
    getCategoryByName,
    updateCategory,
    createCategory,
    deleteCategory

}