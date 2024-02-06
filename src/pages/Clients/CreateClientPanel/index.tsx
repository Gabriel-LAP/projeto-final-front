import styled from 'styled-components';
import { Container } from '../../../components/Container';
import Button from '../../../components/Button';
import { colors } from '../../../colors';
import { FormContainer } from '../../../components/Form';
import { LabelContainer } from '../../../components/Input/Label';
import { InputContainer } from '../../../components/Input';
import { useState } from 'react';
import { createClient } from '../../../services/userService';
import { Client } from '../../../types/Client';

const CreateClientPanelContainer = styled.div`
  display: 'flex';
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem 0 0 0;
`;

const CreateClientPanel = ({ openCreateClientPanel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState<number>();
  const [address, setAddress] = useState('');
  const [addressNumber, setaddressNumber] = useState<number>();
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [cpf, setCpf] = useState('');

  const handleCreateClient = async () => {
    const newClient: Client = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      number: addressNumber,
      city: city,
      state: state,
      zipCode: zipCode,
      cpf: cpf,
    };

    openCreateClientPanel(false);
    return await createClient(newClient);
  };
  return (
    <CreateClientPanelContainer>
      <Container
        display='flex'
        width='50rem'
        justifyContent='center'
        margin='0 auto 4rem auto'
        gap='8.5rem'
      >
        <Button
          type='submit'
          text='Salvar'
          width='200px'
          height='40px'
          backgroundcolor={colors.purple}
          activebgcolor={colors.blue}
          color={colors.ice}
          boxshadow='0px 5px 10px rgba(0, 0, 0, 60)'
          onClick={handleCreateClient}
        />
        <Button
          type='button'
          onClick={() => openCreateClientPanel(false)}
          text='Fechar'
          width='200px'
          height='40px'
          backgroundcolor={colors.purple}
          activebgcolor={colors.blue}
          color={colors.ice}
          boxshadow='0px 5px 10px rgba(0, 0, 0, 60)'
        />
      </Container>

      <FormContainer
        display='grid'
        gridtemplatecolumns='45% 45%'
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

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Email
          <InputContainer
            onChange={(e) => setEmail(e.target.value)}
            type='text'
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

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Telefone
          <InputContainer
            onChange={(e) => setPhone(parseInt(e.target.value))}
            type='number'
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

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Cpf
          <InputContainer
            onChange={(e) => setCpf(e.target.value)}
            type='text'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='cpf'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={cpf}
            color={colors.purple}
          />
        </LabelContainer>

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Endereço
          <InputContainer
            onChange={(e) => setAddress(e.target.value)}
            type='text'
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
            type='number'
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
    </CreateClientPanelContainer>
  );
};

export default CreateClientPanel;
