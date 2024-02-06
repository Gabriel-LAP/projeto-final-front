import styled from 'styled-components';
import Button from '../../../components/Button';
import { colors } from '../../../colors';
import { FormContainer } from '../../../components/Form';
import { LabelContainer } from '../../../components/Input/Label';
import { InputContainer } from '../../../components/Input';
import { Client } from '../../../types/Client';
import { useState } from 'react';
import { useClients } from '../../../Hooks/useClients';

const EditClientPanelConteiner = styled.div` 
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


`;

const EditClientPanel = ({
  client,
  fechaModal,
}: {
  client: Client;
  fechaModal: (a: boolean, b: boolean) => void;
}) => {
  const { handleUpdateClient } = useClients();

  const [name, setName] = useState(client.name);
  const [email, setEmail] = useState(client.email);
  const [phone, setPhone] = useState(client.phone);
  const [address, setAddress] = useState(client.address);
  const [addressNumber, setaddressNumber] = useState(client.number);
  const [city, setCity] = useState(client.city);
  const [state, setState] = useState(client.state);
  const [zipCode, setZipCode] = useState(client.zipCode);

  const handleSaveButton = async () => {
    const updatedClient = {
      ...client,

      name: name,
      email: email,
      phone: phone,
      address: address,
      number: addressNumber,
      city: city,
      state: state,
      zipCode: zipCode,
    };
    console.log(updatedClient);
    fechaModal(false, true);

    await handleUpdateClient(updatedClient);
  };

  return (
    <EditClientPanelConteiner>
      <div className='buttonWrapper'>
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
      </div>
      <FormContainer
        display='grid'
        gridtemplatecolumns='50% 50%'
        // onSubmit={handleUpdateOrder}
      >
        <LabelContainer margin='0 0 1rem 0' width='420px' height='80px'>
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

        <LabelContainer margin='0 0 1rem 0' width='420px' height='80px'>
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

        <LabelContainer margin='0 0 1rem 0' width='420px' height='80px'>
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

        <LabelContainer margin='0 0 1rem 0' width='420px' height='80px'>
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

        <LabelContainer margin='0 0 1rem 0' width='420px' height='80px'>
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

        <LabelContainer margin='0 0 1rem 0' width='420px' height='80px'>
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
        <LabelContainer margin='0 0 1rem 0' width='420px' height='80px'>
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
        <LabelContainer margin='0 0 1rem 0' width='420px' height='80px'>
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
    </EditClientPanelConteiner>
  );
};

export default EditClientPanel;
