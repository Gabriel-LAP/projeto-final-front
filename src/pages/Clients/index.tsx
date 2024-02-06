import styled from 'styled-components';
import { TituloContainer } from '../../components/Titulo';
import { colors } from '../../colors';
import Header from '../../components/Header';
import { UlComtainer } from '../../components/Ul';
import { LiContainer } from '../../components/Ul/Li';
import { v4 } from 'uuid';
import { Container } from '../../components/Container';
import Modal from 'react-modal';
// import { InfoContainer } from '../../components/Info';
import Button from '../../components/Button';
import { useClients } from '../../Hooks/useClients';
import { useEffect, useState } from 'react';
import { Client } from '../../types/Client';
import EditClientPanel from './EditClientPanel';
import { deleteClient } from '../../services/userService';
import { red } from '@mui/material/colors';
import CreateClientPanel from './CreateClientPanel';

const ClientsPanelContainer = styled.div`
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

const ClientsPanel = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(true);
  const [createClientPanelisOpen, setCreateClientPanelisOpen] = useState(false);

  const {
    clients,
    selectedClient,
    setSelectedClient,
    // setClients,
    handleClients,
  } = useClients();

  useEffect(() => {
    handleClients();
    // console.log(clients);
  }, []);

  //   const handleClick = (client: Client) => {
  //     setSelectedClient(client);

  //     setIsOpen(true);

  // console.log(order);
  //   };

  const handleEditButton = (client: Client) => {
    setSelectedClient(client);

    setIsOpen(true);

    // console.log(order);
  };

  const handleDeleteButton = (client: Client) => {
    return deleteClient(client);

    // setIsOpen(true);

    // console.log(order);
  };

  const handleEditClient = (fechaModal: boolean, conteudoModal: boolean) => {
    setIsOpen(fechaModal);
    setModalContent(conteudoModal);
    handleClients();
  };
  const fecharModal = () => {
    setIsOpen(false);
  };

  const openCreateClientPanel = ({
    fechaCreateClientPanel,
  }: {
    fechaCreateClientPanel: boolean;
  }) => {
    setCreateClientPanelisOpen(fechaCreateClientPanel);
  };

  return (
    <Container>
      <Header />
      <ClientsPanelContainer>
        <div className='tituloWrapper'>
          <TituloContainer
            tamanhofonte='1.9rem'
            color={colors.purple}
            fontWeight='800'
            margin='0rem 0 0 0'
          >
            Clientes
          </TituloContainer>
        </div>
        <UlComtainer padding='.9rem 0 0 0'>
          <Button
            text={'Novo Cliente'}
            backgroundcolor={colors.purple}
            height='3rem'
            width='9rem'
            color={colors.ice}
            margin='.7rem 58rem 0 0'
            onClick={() => setCreateClientPanelisOpen(true)}
          />

          {createClientPanelisOpen ? (
            <CreateClientPanel
              openCreateClientPanel={() => openCreateClientPanel}
              fechaModal={fecharModal}
            />
          ) : (
            clients.length > 0 &&
            clients.map((client) => (
              <LiContainer
                display='flex'
                height='13rem'
                gridRowRepeate='4, 25%'
                gap='0'
                spanSpace={false}
                key={v4()}
                // onClick={() => handleClick(client)}
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
                  <span>Nome: {client.name}</span>
                  <span>Telefone: {client.phone}</span>
                  <span>Email: {client.email}</span>
                  <span>Endereço: {client.address}</span>
                  <span>Número: {client.number}</span>
                  <span>Cidade: {client.city}</span>
                  <span>Estado: {client.state}</span>
                  <span>Cep: {client.zipCode}</span>
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
                    onClick={() => handleEditButton(client)}
                    color={red.A200}
                    width='5rem'
                  />
                  <Button
                    height='2rem'
                    text={'Excluir'}
                    backgroundcolor={red.A200}
                    onClick={() => handleDeleteButton(client)}
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

                {selectedClient && (
                  <EditClientPanel
                    client={selectedClient}
                    fechaModal={handleEditClient}
                  />
                )}
              </>
            )}
          </Modal>
        </UlComtainer>
      </ClientsPanelContainer>
    </Container>
  );
};

export default ClientsPanel;
