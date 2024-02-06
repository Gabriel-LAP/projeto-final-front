import { useState } from 'react';
import { Client } from '../types/Client';
import { getAllClients, updateClient } from '../services/userService';

const useClients = () => {
    const [clients, setClients] = useState<Client[]>([]);
    const [selectedClient, setSelectedClient] = useState<Client>();

    const handleClients = async () => {
        try {
            
            const clientList = await getAllClients() 
    
            setClients(clientList.reverse());
            
        } catch (error) {
            
            console.log(error);
            throw error;
        }
            
    }
    const handleUpdateClient = async (client: Client) => {
        const resp = await updateClient(client);
        console.log(resp)

        return resp
    }

    return {
        clients,
        handleClients,
        selectedClient,
        setSelectedClient,
        handleUpdateClient
    }
}

export { useClients };