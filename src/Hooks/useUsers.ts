import { useState } from 'react';
import { deleteUser, getAllUsers, updateUser } from '../services/userService';
import { User } from '../types/User';

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User>();

    const handleUsers = async () => {
        try {
            const userList = await getAllUsers() 
                
                    setUsers(userList.reverse());
            
        } catch (error) {
            
            console.log(error);
            throw error;
        }   
            
           
    }
    const handleUpdateUser = async (user: User) => {
        const resp = await updateUser(user);
        console.log(resp)

        return resp
    }

    const handleDeleteUser = async (user: User) => {
        const resp = await deleteUser(user);
        console.log(resp)
    }

    return {
        users,
        setUsers,
        selectedUser,
        setSelectedUser,
        handleUsers,
        handleUpdateUser,
        handleDeleteUser
    }
}

export { useUsers };