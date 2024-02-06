import styled from 'styled-components';
import { InputContainer } from '../../components/Input';
import Button from '../../components/Button';
import { TituloContainer } from '../../components/Titulo';
import { colors } from '../../colors';
import { FormContainer } from '../../components/Form';
import Logo from '../../components/Logo';
import { useFormLoginHook } from '../../Hooks/useFormLogin';
// import { SubmitFormLogin } from '../../types/SubmitForm';
import { SubmitHandler } from 'react-hook-form';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  max-width: auto;
  background: ${colors.purple};
  color: #fff;

  position: relative;

  span {
    position: absolute;
    top: 17px;
    left: -350px;
    background: ${colors.mint};
    color: ${colors.purple};
    border-radius: 10px 0px 0px 10px;
    text-align: center;
    padding-top: 13px;
    height: 30px;
    width: 350px;
    font-size: 1.2rem;
  }
`;

const Login = () => {
  const {
    handleSubmit,
    register,
    handleFormLogin,
    // formState: { errors },
  } = useFormLoginHook();

  const onSubmit: SubmitHandler<{ email: string; password: string }> = (
    data
  ) => {
    handleFormLogin(data, '/meu-painel');
  };

  return (
    <LoginContainer>
      <span>Bem vindo(a) á Smart Fix</span>
      <Logo margin='4rem 0 0 0' />
      <TituloContainer
        tamanhofonte='1.3rem'
        margin='3.5rem 0 3.5rem 0'
        color={colors.ice}
      >
        Faça login com sua conta
      </TituloContainer>

      <FormContainer
        display='flex'
        flexDirection='column'
        alignItems='center'
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputContainer
          infoPanel={false}
          width='400px'
          height='30px'
          type='email'
          placeholder='Email'
          margin='0 0 2.3rem 0'
          {...register('email', { required: true })}
        />

        <InputContainer
          infoPanel={false}
          width='400px'
          height='30px'
          type='password'
          placeholder='Senha'
          margin='0 0 2rem 0'
          maxLength={8}
          {...register('password', { required: true })}
        />
        {/* {errors.password?.message && <p>{errors.password.message}</p>} */}
        <Button
          text='Entrar'
          width='200px'
          height='40px'
          backgroundcolor={colors.mint}
          activebgcolor={colors.blue}
          color={colors.purple}
          type='submit'
        />
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
