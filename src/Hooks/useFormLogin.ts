import { SubmitFormLogin } from '../types/SubmitForm';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUser } from '../services/userService';
import { useNavigate } from 'react-router-dom';
import {schemaLogin} from './schema';
// import { SubmitFormLogin } from '../types/SubmitForm';

const useFormLoginHook = ()=>{
    const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SubmitFormLogin>({
    mode: 'all',
    resolver: zodResolver(schemaLogin),
  });

  // const local = () => {
  //   localStorage.clear();
  // };
  // local();

  //   console.log('errors', errors);
  //   console.log(localStorage.getItem('token'));

  const handleFormLogin = async (data: SubmitFormLogin ,  path: string ) => {
    const resp = await loginUser(data);
    const token = resp.token;
    const user = resp.user;
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(user));
    // console.log(localStorage.length);

    // console.log(token);

    // console.log(await loginUser(data));
    // console.log(token);
    // console.log(JSON.parse(localStorage.getItem('user')));

    return navigate(path);
  };
    return {navigate, handleSubmit, register, formState: { errors }, handleFormLogin};
  
}

export {useFormLoginHook};