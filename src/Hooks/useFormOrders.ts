import { SubmitFormOrder } from './../types/SubmitForm';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateOrder } from '../services/userService';
import { useNavigate } from 'react-router-dom';
import {schemaOrder} from './schema';
import { Orders } from '../types/Orders';
import { useState } from 'react';
// import { SubmitFormLogin } from '../types/SubmitForm';

const useFormOrderHook = ()=>{
 const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(true);

    const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SubmitFormOrder>({
    mode: 'all',
    resolver: zodResolver(schemaOrder),
  });

  // const local = () => {
  //   localStorage.clear();
  // };
  // local();

  //   console.log('errors', errors);
  //   console.log(localStorage.getItem('token'));

  const handleFormOrder = async (data:Orders ) => {
    const resp = await updateOrder(data);
    console.log(resp);


    return resp
  };
    return {navigate, handleSubmit, register, formState: { errors }, handleFormOrder, modalIsOpen, setIsOpen, modalContent, setModalContent};
  
}

export {useFormOrderHook};