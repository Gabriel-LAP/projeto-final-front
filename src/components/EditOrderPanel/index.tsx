import styled from 'styled-components';
import Button from '../Button';
import { colors } from '../../colors';
import { FormContainer } from '../Form';
import { LabelContainer } from '../Input/Label';
import { InputContainer } from '../Input';
import { Orders } from '../../types/Orders';
import { useFormOrderHook } from '../../Hooks/useFormOrders';
// import { SubmitFormOrder } from '../../types/SubmitForm';
// import { updateOrder } from '../../services/userService';
// import { useOrders } from '../../Hooks';
import { useState } from 'react';

const EditOrderPanelConteiner = styled.div` 
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

const EditOrderPanel = ({
  order,
  fechaModal,
}: {
  order: Orders;
  fechaModal: (a: boolean, b: boolean) => void;
}) => {
  const { handleFormOrder } = useFormOrderHook();

  const [name, setName] = useState(order.owner.name);
  const [device, setDevice] = useState(order.device);
  const [faulty, setFaulty] = useState(order.faulty);
  const [price, setPrice] = useState<number>(order.price);
  const [guarantee, setGuarantee] = useState(order.guarantee);
  const [parts, setParts] = useState(order.parts);

  const handleUpdateOrder = async () => {
    const updatedOrder = {
      ...order,
      owner: {
        ...order.owner,
        name: name,
      },
      device: device,
      faulty: faulty,
      price: price,
      guarantee: guarantee,
      parts: parts,
    };
    // console.log(updatedOrder);
    fechaModal(false, true);

    await handleFormOrder(updatedOrder);
  };

  return (
    <EditOrderPanelConteiner>
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
          onClick={handleUpdateOrder}
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
            // {...register('owner.name')}
          />
        </LabelContainer>
        {/* {errors.owner.name?.message && <p>{errors.owner.name.message}</p>} */}

        <LabelContainer margin='0 0 1rem 0' width='420px' height='80px'>
          {' '}
          Aparelho
          <InputContainer
            onChange={(e) => setDevice(e.target.value)}
            type='text'
            placeholder='Nome'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='device'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={device}
            color={colors.purple}
            // {...register('device')}
          />
        </LabelContainer>
        {/* {errors.device?.message && <p>{errors.device.message}</p>} */}

        <LabelContainer margin='0 0 1rem 0' width='420px' height='80px'>
          {' '}
          Defeito
          <InputContainer
            onChange={(e) => setFaulty(e.target.value)}
            type='text'
            placeholder='Nome'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='faulty'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={faulty}
            color={colors.purple}
            // {...register('faulty')}
          />
        </LabelContainer>
        {/* {errors.faulty?.message && <p>{errors.faulty.message}</p>} */}

        <LabelContainer margin='0 0 1rem 0' width='420px' height='80px'>
          {' '}
          Valor
          <InputContainer
            onChange={(e) => setPrice(Number(e.target.value))}
            type='number'
            placeholder='Nome'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='price'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={price}
            color={colors.purple}
            // {...register('price')}
          />
        </LabelContainer>
        {/* {errors.price?.message && <p>{errors.price.message}</p>} */}

        <LabelContainer margin='0 0 1rem 0' width='420px' height='80px'>
          {' '}
          Garentia
          <InputContainer
            onChange={(e) => setGuarantee(e.target.value)}
            type='text'
            placeholder='Nome'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='guarantee'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={guarantee}
            color={colors.purple}
            // {...register('guarantee')}
          />
        </LabelContainer>

        <LabelContainer margin='0 0 1rem 0' width='420px' height='80px'>
          {' '}
          Peças
          <InputContainer
            onChange={(e) => setParts(e.target.value)}
            type='text'
            placeholder='Nome'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='parts'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={parts}
            color={colors.purple}
            // {...register('parts')}
          />
        </LabelContainer>
        {/* {errors.parts?.message && <p>{errors.parts.message}</p>} */}
      </FormContainer>
    </EditOrderPanelConteiner>
  );
};

export default EditOrderPanel;
