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
import { User } from '../../types/User';
import { useUsers } from '../../Hooks/useUsers';
import EditUserPanel from './EditUserPanel';
import CreateUserPanel from './CreateUserPanel';
import { insertMaskInPhone } from '../../mascaras/mascaraPhone';
import { insertMaskInCEP } from '../../mascaras/mascaraCEP';
import { insertMaskInCpf } from '../../mascaras/mascaraCpf';

const UsersPanelContainer = styled.div`
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

const UsersPanel = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(true);
  const [createUserPanelisOpen, setCreateUserPanelisOpen] = useState(false);

  const {
    users,
    selectedUser,
    setSelectedUser,
    // setusers,
    handleUsers,
    handleDeleteUser,
  } = useUsers();

  useEffect(() => {
    handleUsers();
    // console.log(users);
  }, []);
  useEffect(() => {
    console.log(users);
  }, [users]);

  const handleEditButton = (user: User) => {
    setSelectedUser(user);

    setIsOpen(true);

    // console.log(order);
  };

  const handleEditUser = (fechaModal: boolean, conteudoModal: boolean) => {
    setIsOpen(fechaModal);
    setModalContent(conteudoModal);
    handleUsers();
  };
  const fecharModal = (data) => {
    setIsOpen(data);
  };

  const openCreateUserPanel = ({
    fechaCreateUserPanel,
  }: {
    fechaCreateUserPanel: boolean;
  }) => {
    setCreateUserPanelisOpen(fechaCreateUserPanel);
  };

  return (
    <Container>
      <Header />
      <UsersPanelContainer>
        <div className='tituloWrapper'>
          <TituloContainer
            tamanhofonte='1.9rem'
            color={colors.purple}
            fontWeight='800'
            margin='0rem 0 0 0'
          >
            Funcionários
          </TituloContainer>
        </div>
        <UlComtainer padding='.9rem 0 0 0'>
          {!createUserPanelisOpen && (
            <Button
              text={'Novo Funcionário'}
              backgroundcolor={colors.purple}
              height='3rem'
              width='9rem'
              color={colors.ice}
              margin='.7rem 58rem 0 0'
              onClick={() => setCreateUserPanelisOpen(true)}
            />
          )}

          {createUserPanelisOpen ? (
            <CreateUserPanel openCreateUserPanel={openCreateUserPanel} />
          ) : (
            users.length > 0 &&
            users.map((user) => (
              <LiContainer
                display='flex'
                height='15rem'
                gridRowRepeate='4, 25%'
                gap='0'
                spanSpace={false}
                key={v4()}
                // onClick={() => handleClick(user)}
              >
                <Container
                  width='55rem'
                  display='grid'
                  height='180px'
                  gridTemplateColumns='50% 50%'
                  gridTemplateRows='repeat(5, 2.5rem)'
                  gap='0rem 0.8rem'
                  alignItems='top'
                >
                  <span>Nome: {user.name}</span>
                  <span>Telefone: {insertMaskInPhone(user.phone)}</span>
                  <span>Email: {user.email}</span>
                  <span>Cpf: {insertMaskInCpf(user.cpf)}</span>
                  <span>Endereço: {user.address}</span>
                  <span>Número: {user.number}</span>
                  <span>Cidade: {user.city}</span>
                  <span>Estado: {user.state}</span>
                  <span>Cep: {insertMaskInCEP(user.zipCode)}</span>
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
                    onClick={() => handleEditButton(user)}
                    color={red.A200}
                    width='5rem'
                  />
                  <Button
                    height='2rem'
                    text={'Excluir'}
                    backgroundcolor={red.A200}
                    onClick={() => handleDeleteUser(user)}
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
                {selectedUser && (
                  <EditUserPanel
                    user={selectedUser}
                    fechaModal={handleEditUser}
                  />
                )}
              </>
            )}
          </Modal>
        </UlComtainer>
      </UsersPanelContainer>
    </Container>
  );
};

export default UsersPanel;
