import { useState } from 'react';
import { Orders } from '../types/Orders';
import { getClientById, listOrders } from '../services/userService';



const useOrders = () => {
    const [orders, setOrders] = useState<Orders[]>([]);

    const [selectedOrder, setSelectedOrder] = useState<Orders>();

  const findOwnerName = async (id: string) => {
    const clientName = await getClientById(id)
    return clientName.name;
  };

  const handleOrders = async () => {
    try{
        const orderList = await listOrders()

        const orderWithOwnerName = orderList.map(async (item) => {
            // console.log(item)
            const ownerName = await findOwnerName(item.owner._id)
            // console.log(ownerName)
            return {
              ...item,
                client_name: ownerName
            }
            
        })
        const orderPromise = await Promise.all(orderWithOwnerName)
          setOrders(orderPromise.reverse());
        // console.log(orders);
      } catch(error) {
          console.log(error.response.data);
          throw error;
          
      }

  };
    return { 
        orders,  
        handleOrders, 
        selectedOrder, 
        setSelectedOrder,
     };
}

export { useOrders };