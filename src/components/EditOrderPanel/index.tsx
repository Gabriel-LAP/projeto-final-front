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
import { useEffect, useState } from 'react';
import { Container } from '../Container';
import { useOrders } from '../../Hooks';
import { useCategory } from '../../Hooks/usePartCategory';
import { MenuItem, Select } from '@mui/material';
import { useParts } from '../../Hooks/useParts';

const EditOrderPanelConteiner = styled.div`
  display: 'flex';
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  height: 100%;
`;

const EditOrderPanel = ({
  order,
  fechaModal,
  handleEdit,
}: {
  order: Orders;
  handleEdit: (a: boolean) => void;
  fechaModal: (a: boolean) => void;
}) => {
  const { handleFormOrder } = useFormOrderHook();

  const [name, setName] = useState(order.owner.name);
  const [device, setDevice] = useState(order.device);
  const [faulty, setFaulty] = useState(order.faulty);
  const [price, setPrice] = useState<number>(order.price);
  const [guarantee, setGuarantee] = useState(order.guarantee);
  //   const [parts, setParts] = useState(order.parts);

  const { handleOrders } = useOrders();

  const {
    category,
    selectedCategory,
    handleChangeSelectedCategory,
    handleCategory,
    cat,
  } = useCategory();

  const {
    parts,
    selectedPart,
    // setSelectedPart,
    handleChangeSelectedPart,
    // handleListPartById,
    handleParts,
    partListByCategory,
  } = useParts();

  useEffect(() => {
    handleCategory();
    handleParts();
    selectedCategory;
  }, [partListByCategory]);

  const handleUpdateOrder = async () => {
    const updatedOrder = {
      ...order,
      device: device,
      faulty: faulty,
      price: price,
      guarantee: guarantee,
      parts: JSON.stringify(selectedPart),
    };
    console.log(updatedOrder);
    console.log(selectedPart);
    handleEdit(true);
    fechaModal(false);

    await handleFormOrder(updatedOrder);
    await handleOrders();
  };

  //   console.log('clg da linha 86: ', selectedCategory);
  return (
    <EditOrderPanelConteiner>
      <Container
        display='flex'
        gap='4rem'
        width='57rem'
        justifyContent='center'
        margin='0 auto 4rem auto'
      >
        <Button
          type='button'
          onClick={() => fechaModal(false)}
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
      </Container>
      <FormContainer
        display='grid'
        gridtemplatecolumns='50% 50%'
        // alignItems='center'
        justifyContent='center'
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
          />
        </LabelContainer>

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
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
          />
        </LabelContainer>

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
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
          />
        </LabelContainer>
        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
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
          />
        </LabelContainer>

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Categoria
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={selectedCategory}
            onChange={handleChangeSelectedCategory}
            sx={{
              backgroundColor: colors['ice'],
              color: colors['purple'],
              '& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
                backgroundColor: '#000',
              },
            }}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            {category &&
              category.map((item) => (
                <MenuItem value={item.name}>{item.name}</MenuItem>
              ))}
          </Select>
        </LabelContainer>

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Peças
          {selectedCategory !== null &&
            selectedCategory !== undefined &&
            selectedCategory !== '' && (
              <Select
                labelId='demo-simple-select-standard-label'
                id='demo-simple-select-standard'
                value={selectedPart}
                onChange={handleChangeSelectedPart}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>

                {parts
                  .filter((item) => item.category === cat._id)
                  .map((item) => (
                    <MenuItem value={JSON.stringify(item)}>
                      {item.name} - {item.brand}
                    </MenuItem>
                  ))}
              </Select>
            )}
        </LabelContainer>
      </FormContainer>
    </EditOrderPanelConteiner>
  );
};

export default EditOrderPanel;
