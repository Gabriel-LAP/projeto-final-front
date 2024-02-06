import styled from 'styled-components';
import { Container } from '../../../components/Container';
import Button from '../../../components/Button';
import { colors } from '../../../colors';
import { FormContainer } from '../../../components/Form';
import { LabelContainer } from '../../../components/Input/Label';
import { InputContainer } from '../../../components/Input';
import { useState, useEffect } from 'react';
import { createPart, getCategoryByName } from '../../../services/userService';
import { Part } from '../../../types/Parts';
import Select from '@mui/material/Select';
import { useCategory } from '../../../Hooks/usePartCategory';
import { MenuItem } from '@mui/material';

const CreatePartPanelContainer = styled.div`
  display: 'flex';
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem 0 0 0;
`;

const CreatePartPanel = ({ openCreatePartPanel }) => {
  const [name, setName] = useState('');
  const [purchase, setPurchasePrice] = useState<number>();
  const [quantity, setQuantity] = useState<number>();
  const [brand, setBrand] = useState('');

  const {
    category,
    selectedCategory,
    handleCategory,
    handleChangeSelectedCategory,
  } = useCategory();

  useEffect(() => {
    handleCategory();
  }, []);

  console.log(selectedCategory);

  const handleCreatePart = async () => {
    const categoryId = await getCategoryByName(selectedCategory);

    const newPart: Part = {
      name: name,
      purchasePrice: purchase,
      quantity: quantity,
      brand: brand,
      category: categoryId._id,
      updatedAt: new Date(),
      //   createdAt: new Date(),
    };
    console.log('clg handleCreate: ', newPart);

    await createPart(newPart);
    openCreatePartPanel(false);
  };
  return (
    <CreatePartPanelContainer>
      21
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
          onClick={handleCreatePart}
        />
        <Button
          type='button'
          onClick={() => openCreatePartPanel(false)}
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
          Preço de Compra
          <InputContainer
            onChange={(e) => setPurchasePrice(parseFloat(e.target.value))}
            type='number'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='device'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={purchase}
            color={colors.purple}
          />
        </LabelContainer>

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Qantidade
          <InputContainer
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            type='text'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='device'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={quantity}
            color={colors.purple}
          />
        </LabelContainer>

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Marca
          <InputContainer
            onChange={(e) => setBrand(e.target.value)}
            type='text'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='faulty'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={brand}
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
            label='Age'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            {category.map((item) => (
              <MenuItem value={item.name}>{item.name}</MenuItem>
            ))}
          </Select>
        </LabelContainer>
      </FormContainer>
    </CreatePartPanelContainer>
  );
};

export default CreatePartPanel;
