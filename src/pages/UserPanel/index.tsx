import styled from 'styled-components';
import { TituloContainer } from '../../components/Titulo';
import { colors } from '../../colors';
import Header from '../../components/Header';
import { UlComtainer } from '../../components/Ul';
import { LiContainer } from '../../components/Ul/Li';
import { v4 } from 'uuid';
// import OrderPanel from '../../components/OrderPanel';
import { useEffect, useState } from 'react';
import { useOrders } from '../../Hooks';
import { Orders } from '../../types/Orders';
import { Container } from '../../components/Container';
import Modal from 'react-modal';
import { InfoContainer } from '../../components/Info';
import Button from '../../components/Button';
import EditOrderPanel from '../../components/EditOrderPanel';
// import { useFormOrderHook } from '../../Hooks/useFormOrders';

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
    backgroundColor: `${colors.darckIce}`,
  },

  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '57rem',
    gap: '4rem',
  },
  content: {
    border: '1px solid green',
    background: '#839cff',
    borderRadius: '20px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4rem',
    paddingTop: '3rem',
  },
};

Modal.setAppElement('#root');

const UserPanel = () => {
  const {
    orders,
    priceFormate,
    handleOrders,
    selectedOrder,
    setSelectedOrder,
  } = useOrders();

  //   const { modalContent, setModalContent, modalIsOpen, setIsOpen } =
  //     useFormOrderHook();
  // const { navigate } = useFormOrderHook();

  const handleClick = (order: Orders) => {
    setSelectedOrder(order);

    setIsOpen(true);

    // console.log(order);
  };

  useEffect(() => {
    handleOrders();
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(true);

  const handleEditOrder = (fechaModal: boolean, conteudoModal: boolean) => {
    setIsOpen(fechaModal);
    setModalContent(conteudoModal);
    handleOrders();
  };
  const fecharModal = () => {
    setIsOpen(false);
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
          {orders.length > 0 &&
            orders.map((order) => (
              <LiContainer
                activebgcolor={colors.mint}
                activecolor={colors.purple}
                key={v4()}
                // className={index === 0 ? 'first-li' : ''}
                onClick={() => handleClick(order)}
                display='grid'
              >
                <span>Cliente: {order.owner.name}</span>
                <span>Aparelho: {order.device}</span>
                <span>Preço: {priceFormate(order.price)}</span>
                <span>Garentia: {order.guarantee}</span>
                <span>Defeito: {order.faulty}</span>
              </LiContainer>
            ))}

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={fecharModal}
            contentLabel='Informações do'
            style={modalStyle}
          >
            {modalContent ? (
              <>
                <div className='buttonWrapper' style={modalStyle.buttonWrapper}>
                  <Button
                    type='button'
                    onClick={fecharModal}
                    text='Fechar'
                    width='200px'
                    height='40px'
                    backgroundcolor={colors.purple}
                    activebgcolor={colors.blue}
                    color={colors.ice}
                    boxshadow='0px 5px 10px rgba(0, 0, 0, 60)'
                  />
                  <Button
                    type='button'
                    text='Editar'
                    onClick={() => setModalContent(false)}
                    width='200px'
                    height='40px'
                    backgroundcolor={colors.purple}
                    activebgcolor={colors.blue}
                    color={colors.ice}
                    boxshadow='0px 5px 10px rgba(0, 0, 0, 60)'
                  />
                </div>

                {selectedOrder && (
                  <InfoContainer height='20rem'>
                    <span>Aparelho: {selectedOrder.device}</span>
                    <span>Dono: {selectedOrder.owner.name}</span>
                    <span>Defeito: {selectedOrder.faulty}</span>
                    <span>Peça: {selectedOrder.parts}</span>
                    <span>Preço: {selectedOrder.price}</span>
                    <span>Garantia: {selectedOrder.guarantee}</span>
                  </InfoContainer>
                )}
              </>
            ) : (
              <>
                <EditOrderPanel
                  order={selectedOrder}
                  fechaModal={handleEditOrder}
                />
              </>
            )}
          </Modal>
        </UlComtainer>
      </UserPainel>
    </Container>
  );
};

export default UserPanel;
