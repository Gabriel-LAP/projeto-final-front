import styled from 'styled-components';
import { Container } from '../../../components/Container';
import Button from '../../../components/Button';
import { colors } from '../../../colors';
import { FormContainer } from '../../../components/Form';
import { LabelContainer } from '../../../components/Input/Label';
import { InputContainer } from '../../../components/Input';
import { useState } from 'react';
import { createOrder, getAllClients } from '../../../services/userService';
import { NewOrder } from '../../../types/Orders';
import { useOrders } from '../../../Hooks';

const CreateOrderPanelContainer = styled.div`
  display: 'flex';
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem 0 0 0;
`;

const CreateOrderPanel = ({ openCreateOrderPanel }) => {
  const [ownerName, setOwnerName] = useState('');
  const [price, setPrice] = useState<number>();
  const [faulty, setFaulty] = useState('');
  const [part, setPart] = useState('');
  const [brand, setBrand] = useState('');
  const [device, setDevice] = useState('');
  const [guarantee, setGuarantee] = useState('3 messes');

  const { handleOrders } = useOrders();

  const handleCreateOrder = async () => {
    const clients = await getAllClients();
    const client = clients.find((client) => client.name === ownerName);

    const newOrder: NewOrder = {
      device: device,
      owner: client._id,
      faulty: faulty,
      parts: part,
      price: price,
      statusOrder: 'pendente',
      guarantee: guarantee,
      brand: brand,
      creationDate: new Date(),
    };
    console.log(JSON.stringify(newOrder));

    await handleOrders();
    await createOrder(newOrder);
    openCreateOrderPanel(false);
  };

  return (
    <CreateOrderPanelContainer>
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
          onClick={handleCreateOrder}
        />
        <Button
          type='button'
          onClick={() => openCreateOrderPanel(false)}
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
          Cliente
          <InputContainer
            onChange={(e) => setOwnerName(e.target.value)}
            type='text'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            width='400px'
            height='30px'
            id='client'
            backgroundcolor={colors.ice}
            value={ownerName}
            color={colors.purple}
          />
        </LabelContainer>

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Preço
          <InputContainer
            // pattern='[0-9]+([,\.][0-9]+)?'
            // inputMode='numeric'
            // step='0.010'
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            type='number'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='price'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={price}
            color={colors.purple}
          />
        </LabelContainer>

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Defeito
          <InputContainer
            onChange={(e) => setFaulty(e.target.value)}
            type='text'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='faulty'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={faulty}
            color={colors.purple}
          />
        </LabelContainer>

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Marca do Aparelho
          <InputContainer
            onChange={(e) => setBrand(e.target.value)}
            type='text'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='brand'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={brand}
            color={colors.purple}
          />
        </LabelContainer>

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Aparelho
          <InputContainer
            onChange={(e) => setDevice(e.target.value)}
            type='text'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='device'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={device}
            color={colors.purple}
          />
        </LabelContainer>

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Peças
          <InputContainer
            onChange={(e) => setPart(e.target.value)}
            type='text'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='price'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={part}
            color={colors.purple}
          />
        </LabelContainer>

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Garantia
          <InputContainer
            onChange={(e) => setGuarantee(e.target.value)}
            type='text'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='price'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={guarantee}
            color={colors.purple}
          />
        </LabelContainer>
      </FormContainer>
    </CreateOrderPanelContainer>
  );
};

export default CreateOrderPanel;
