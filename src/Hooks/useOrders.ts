import { useState } from 'react';
import { Orders } from '../types/Orders';
import { listOrders } from '../services/userService';



const useOrders = () => {
    const [orders, setOrders] = useState<Orders[]>([]);

    const [selectedOrder, setSelectedOrder] = useState<Orders>();
    
    
    const priceFormate = (price: number) => {
        return price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
  };

  const handleOrders = async () => {
    await listOrders()
      .then((order) => {
          setOrders(order);
        // console.log(order);
        // console.log(order);
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  };
    return { 
        orders, 
        priceFormate, 
        handleOrders, 
        selectedOrder, 
        setSelectedOrder,
     };
}

export { useOrders };