import styled from 'styled-components';
import Button from '../../../components/Button';
import { colors } from '../../../colors';
import { FormContainer } from '../../../components/Form';
import { LabelContainer } from '../../../components/Input/Label';
import { InputContainer } from '../../../components/Input';
import { useEffect, useState } from 'react';
import { Container } from '../../../components/Container';
import { User } from '../../../types/User';
import { useUsers } from '../../../Hooks/useUsers';

const EditUserPanelConteiner = styled.div`
  display: 'flex';
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  width: 100%;
  height: 100%;
  padding: 3rem 0 0 0;

  .buttonWrapper {
    display: flex;
    justify-content: space-between;
    width: 50rem;
  }
`;

const EditUserPanel = ({
  user,
  fechaModal,
}: {
  user: User;
  fechaModal: (a: boolean, b: boolean) => void;
}) => {
  const { handleUpdateUser, users, handleUsers } = useUsers();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [addressNumber, setaddressNumber] = useState(user.number);
  const [city, setCity] = useState(user.city);
  const [state, setState] = useState(user.state);
  const [zipCode, setZipCode] = useState(user.zipCode);

  const handleSaveButton = async () => {
    const updatedUser = {
      ...user,

      name: name,
      email: email,
      phone: phone,
      address: address,
      number: addressNumber,
      city: city,
      state: state,
      zipCode: zipCode,
    };
    // console.log(updatedUser);
    fechaModal(false, true);

    await handleUpdateUser(updatedUser);
  };

  useEffect(() => {
    handleUsers();
  }, [users]);

  return (
    <EditUserPanelConteiner>
      <Container
        display='flex'
        gap='4rem'
        width='57rem'
        justifyContent='center'
        margin='0 auto 4rem auto'
      >
        <Button
          type='button'
          onClick={() => fechaModal(false, true)}
          text='Fechar'
          width='200px'
          height='40px'
          backgroundcolor={colors.purple}
          activebgcolor={colors.blue}
          color={colors.ice}
          boxshadow='0px 5px 10px rgba(0, 0, 0, 60)'
        />
        <Button
          type='submit'
          text='Salvar'
          width='200px'
          height='40px'
          backgroundcolor={colors.purple}
          activebgcolor={colors.blue}
          color={colors.ice}
          boxshadow='0px 5px 10px rgba(0, 0, 0, 60)'
          onClick={handleSaveButton}
        />
      </Container>
      <FormContainer
        display='grid'
        gridtemplatecolumns='50% 50%'
        justifyContent='center'
        // onSubmit={handleUpdateOrder}
      >
        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          Nome
          <InputContainer
            onChange={(e) => setName(e.target.value)}
            type='text'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            width='400px'
            height='30px'
            id='name'
            backgroundcolor={colors.ice}
            value={name}
            color={colors.purple}
          />
        </LabelContainer>
        {/* {errors.owner.name?.message && <p>{errors.owner.name.message}</p>} */}

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Email
          <InputContainer
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            placeholder='Email'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='device'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={email}
            color={colors.purple}
          />
        </LabelContainer>
        {/* {errors.device?.message && <p>{errors.device.message}</p>} */}

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Telefone
          <InputContainer
            onChange={(e) => setPhone(Number(e.target.value))}
            type='text'
            placeholder='Nome'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='faulty'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={phone}
            color={colors.purple}
          />
        </LabelContainer>
        {/* {errors.faulty?.message && <p>{errors.faulty.message}</p>} */}

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Endereço
          <InputContainer
            onChange={(e) => setAddress(e.target.value)}
            type='text'
            placeholder=''
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='price'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={address}
            color={colors.purple}
          />
        </LabelContainer>

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Número
          <InputContainer
            onChange={(e) => setaddressNumber(Number(e.target.value))}
            type='text'
            placeholder='Nome'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='guarantee'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={addressNumber}
            color={colors.purple}
          />
        </LabelContainer>

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Cidade
          <InputContainer
            onChange={(e) => setCity(e.target.value)}
            type='text'
            placeholder='Nome'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='parts'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={city}
            color={colors.purple}
          />
        </LabelContainer>
        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Estado
          <InputContainer
            onChange={(e) => setState(e.target.value)}
            type='text'
            placeholder='Nome'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='parts'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={state}
            color={colors.purple}
          />
        </LabelContainer>
        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Cep
          <InputContainer
            onChange={(e) => setZipCode(e.target.value)}
            type='text'
            placeholder='Nome'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='parts'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={zipCode}
            color={colors.purple}
          />
        </LabelContainer>
      </FormContainer>
    </EditUserPanelConteiner>
  );
};

export default EditUserPanel;
