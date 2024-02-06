import styled from 'styled-components';
import { TituloContainer } from '../../components/Titulo';
import { colors } from '../../colors';
import Header from '../../components/Header';
import { UlComtainer } from '../../components/Ul';
import { LiContainer } from '../../components/Ul/Li';
import { v4 } from 'uuid';
import { Container } from '../../components/Container';
import Modal from 'react-modal';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import { red } from '@mui/material/colors';
import { Part } from '../../types/Parts';
import { priceFormate } from '../../mascaras/mascaraPreco';
import { useParts } from '../../Hooks/useParts';
import CreatePartPanel from './CreatePart';
import EditPartPanel from './EditParts';

const StoragePanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.darckIce};
  width: 100%;

  .tituloWrapper {
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 60);
    background: ${colors.ice};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: sticky;
    top: 0;
    height: 4rem;
  }
`;

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 242,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(000, 000, 000, 0.6)',
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid green',
    background: '#839cff',
    borderRadius: '20px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '35rem',
    width: '70rem',
  },
};

Modal.setAppElement('#root');

const StoragePanel = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(true);
  const [createPartPanelisOpen, setCreatePartPanelisOpen] = useState(false);

  const {
    parts,
    selectedPart,
    setSelectedPart,
    // setusers,
    handleParts,
    handleDeletePart,
    // handleListPartByCategory,
  } = useParts();

  useEffect(() => {
    handleParts();
  }, [handleParts]);

  const handleEditButton = (part: Part) => {
    setSelectedPart(part);

    setIsOpen(true);

    // console.log(order);
  };

  const handleEditPart = (fechaModal: boolean, conteudoModal: boolean) => {
    setIsOpen(fechaModal);
    setModalContent(conteudoModal);
    handleParts();
  };
  const fecharModal = (data) => {
    setIsOpen(data);
  };

  const openCreatePartPanel = ({
    fechaCreatePartPanel,
  }: {
    fechaCreatePartPanel: boolean;
  }) => {
    setCreatePartPanelisOpen(fechaCreatePartPanel);
  };

  return (
    <Container>
      <Header />
      <StoragePanelContainer>
        <div className='tituloWrapper'>
          <TituloContainer
            tamanhofonte='1.9rem'
            color={colors.purple}
            fontWeight='800'
            margin='0rem 0 0 0'
          >
            Estoque
          </TituloContainer>
        </div>
        <UlComtainer padding='.9rem 0 0 0'>
          {!createPartPanelisOpen && (
            <Button
              text={'Nova Peça'}
              backgroundcolor={colors.purple}
              height='3rem'
              width='9rem'
              color={colors.ice}
              margin='.7rem 58rem 0 0'
              onClick={() => setCreatePartPanelisOpen(true)}
            />
          )}

          {createPartPanelisOpen ? (
            <CreatePartPanel openCreatePartPanel={openCreatePartPanel} />
          ) : (
            parts.length > 0 &&
            parts.map((part) => (
              <LiContainer
                display='flex'
                height='10rem'
                // gridRowRepeate='4, 25%'
                gap='0'
                spanSpace={false}
                key={v4()}
                // onClick={() => handleClick(user)}
              >
                <Container
                  width='55rem'
                  display='grid'
                  height='130px'
                  gridTemplateColumns='50% 50%'
                  gridTemplateRows='repeat(3, 2.5rem)'
                  gap='0rem 0.8rem'
                  alignItems='center'
                >
                  <span>Nome: {part.name}</span>
                  <span>
                    Preço de Compra: {priceFormate(part.purchasePrice)}
                  </span>
                  <span>Quantidade: {part.quantity}</span>
                  <span>Dispositivos: {part.brand}</span>
                  <span>Data de Criação: {part.createdAt.toString()}</span>
                  {/* <span>Categoria: {handleListPartByCategory(part)}</span> */}
                </Container>

                <Container
                  display='grid'
                  gridTemplateRows='50% 50%'
                  height='9rem'
                  alignItems='center'
                >
                  <Button
                    height='2rem'
                    text={'Editar'}
                    backgroundcolor={colors.mint}
                    onClick={() => handleEditButton(part)}
                    color={red.A200}
                    width='5rem'
                  />
                  <Button
                    height='2rem'
                    text={'Excluir'}
                    backgroundcolor={red.A200}
                    onClick={() => handleDeletePart(part)}
                    color={colors.mint}
                    width='5rem'
                  />
                </Container>
              </LiContainer>
            ))
          )}

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={fecharModal}
            contentLabel='Informações do'
            style={modalStyle}
          >
            {modalContent && (
              <>
                {selectedPart && (
                  <EditPartPanel
                    part={selectedPart}
                    fechaModal={handleEditPart}
                  />
                )}
              </>
            )}
          </Modal>
        </UlComtainer>
      </StoragePanelContainer>
    </Container>
  );
};

export default StoragePanel;
