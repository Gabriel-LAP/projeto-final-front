import styled from 'styled-components';
import Button from '../../../components/Button';
import { colors } from '../../../colors';
import { FormContainer } from '../../../components/Form';
import { LabelContainer } from '../../../components/Input/Label';
import { InputContainer } from '../../../components/Input';
import { useEffect, useState } from 'react';
import { Container } from '../../../components/Container';
import { Part } from '../../../types/Parts';
import { useParts } from '../../../Hooks/useParts';

const EditPartPanelConteiner = styled.div`
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

const EditPartPanel = ({
  part,
  fechaModal,
}: {
  part: Part;
  fechaModal: (a: boolean, b: boolean) => void;
}) => {
  const { handleUpdatePart, parts, handleParts } = useParts();

  const [name, setName] = useState(part.name);
  const [purchasePrice, setPurchasePrice] = useState(part.purchasePrice);
  const [quantity, setQuantity] = useState<number>(part.quantity);
  const [brand, setBrand] = useState(part.brand);

  const handleSaveButton = async () => {
    const updatedPart = {
      ...part,

      name: name,
      purchasePrice: purchasePrice,
      quantity: quantity,
      brand: brand,
    };
    // console.log(updatedPart);

    console.log(updatedPart);

    await handleUpdatePart(updatedPart);

    fechaModal(false, true);
  };

  useEffect(() => {
    handleParts();
    // console.log(clients);
  }, [parts]);

  return (
    <EditPartPanelConteiner>
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
          Preço de Compra
          <InputContainer
            onChange={(e) => setPurchasePrice(Number(e.target.value))}
            type='text'
            placeholder='Email'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='device'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={purchasePrice}
            color={colors.purple}
          />
        </LabelContainer>
        {/* {errors.device?.message && <p>{errors.device.message}</p>} */}

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Quantidade
          <InputContainer
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            type='number'
            placeholder='Nome'
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='faulty'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={quantity}
            color={colors.purple}
          />
        </LabelContainer>
        {/* {errors.faulty?.message && <p>{errors.faulty.message}</p>} */}

        <LabelContainer margin='0 auto 1rem auto' width='420px' height='80px'>
          {' '}
          Marca
          <InputContainer
            onChange={(e) => setBrand(e.target.value)}
            type='text'
            placeholder=''
            margin='10px 0 0 0'
            borderbcolor='transparent'
            id='price'
            width='400px'
            backgroundcolor={colors.ice}
            height='30px'
            value={brand}
            color={colors.purple}
          />
        </LabelContainer>
      </FormContainer>
    </EditPartPanelConteiner>
  );
};

export default EditPartPanel;
