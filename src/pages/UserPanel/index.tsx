import styled from 'styled-components';
import { TituloContainer } from '../../components/Titulo';
import { colors } from '../../colors';
import Header from '../../components/Header';
import { UlComtainer } from '../../components/Ul';
import { LiContainer } from '../../components/Ul/Li';
// import { v4 } from 'uuid';
import { useEffect, useState } from 'react';
import { useOrders } from '../../Hooks';
import { Orders } from '../../types/Orders';
import { Container } from '../../components/Container';
import Modal from 'react-modal';
import Button from '../../components/Button';
import EditOrderPanel from '../../components/EditOrderPanel';
import { red } from '@mui/material/colors';
import { deleteOrder } from '../../services/userService';
import CreateOrderPanel from './CreateOrderPanel';
import { priceFormate } from '../../mascaras/mascaraPreco';
import { useParts } from '../../Hooks/useParts';

const UserPainel = styled.div`
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4rem',
    paddingTop: '3rem',
    height: '30rem',
    width: '70rem',
  },
};

Modal.setAppElement('#root');

const UserPanel = () => {
  const { orders, handleOrders, selectedOrder, setSelectedOrder } = useOrders();
  const { handlePartById } = useParts();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(true);
  const [createOrderPanelisOpen, setCreateOrderPanelisOpen] = useState(false);

  const handleEditButton = (order: Orders) => {
    setSelectedOrder(order);

    setIsOpen(true);
    handleOrders();

    // console.log(order);
  };

  useEffect(() => {
    handleOrders();
  }, [orders]);

  const handleEditOrder = (conteudoModal: boolean) => {
    setModalContent(conteudoModal);
    handleOrders();
  };

  const handleDeleteButton = (order: Orders) => {
    deleteOrder(order);
    handleOrders();
  };
  const fecharModal = (data: boolean) => {
    handleOrders();
    return setIsOpen(data);
  };

  const dataMask = (data: Date) => {
    const value = data.toString().split('T', 9);
    const date = value[0];
    const time = value[1].slice(0, 8);
    // console.log(date, time);
    return `${date} / ${time}`;
  };

  const handleP = (p) => {
    return handlePartById(p);
  };

  //   console.log(orders);

  const openCreateClientPanel = ({
    fechaCreateOrderPanel,
  }: {
    fechaCreateOrderPanel: boolean;
  }) => {
    setCreateOrderPanelisOpen(fechaCreateOrderPanel);
  };

  return (
    <Container>
      <Header />
      <UserPainel>
        <div className='tituloWrapper'>
          <TituloContainer
            tamanhofonte='1.9rem'
            color={colors.purple}
            fontWeight='800'
            margin='0rem 0 0 0'
          >
            SERVIÇOS
          </TituloContainer>
        </div>

        <UlComtainer padding='.9rem 0 0 0'>
          {!createOrderPanelisOpen && (
            <Button
              text={'Novo Serviço'}
              backgroundcolor={colors.purple}
              height='3rem'
              width='9rem'
              color={colors.ice}
              margin='.7rem 58rem 0 0'
              onClick={() => setCreateOrderPanelisOpen(true)}
            />
          )}
          {createOrderPanelisOpen ? (
            <CreateOrderPanel openCreateOrderPanel={openCreateClientPanel} />
          ) : (
            orders.length > 0 &&
            orders.map((order) => (
              <LiContainer
                display='flex'
                height='13rem'
                gridRowRepeate='4, 25%'
                gap='0'
                spanSpace={false}
                key={order._id}
              >
                <Container
                  width='55rem'
                  display='grid'
                  height='160px'
                  gridTemplateColumns='50% 50%'
                  gridTemplateRows='repeat(4, 25%)'
                  gap='0rem 0.8rem'
                  alignItems='center'
                >
                  <span>Aparelho: {order.owner.name}</span>
                  <span>Preço: {priceFormate(order.price)}</span>
                  <span>Garentia: {order.guarantee}</span>
                  <span>Defeito: {order.faulty}</span>
                  <span>Peças: {order.parts}</span>
                  <span>Data de Criação: {dataMask(order.creationDate)}</span>
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
                    onClick={() => handleEditButton(order)}
                    color={red.A200}
                    width='5rem'
                  />
                  <Button
                    height='2rem'
                    text={'Excluir'}
                    backgroundcolor={red.A200}
                    onClick={() => handleDeleteButton(order)}
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
                {selectedOrder && (
                  <EditOrderPanel
                    order={selectedOrder}
                    handleEdit={handleEditOrder}
                    fechaModal={fecharModal}
                  />
                )}
              </>
            )}
          </Modal>
        </UlComtainer>
      </UserPainel>
    </Container>
  );
};

export default UserPanel;
