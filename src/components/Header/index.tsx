import styled from 'styled-components';
import { colors } from '../../colors';
import Logo from '../Logo';
import { LineContainer } from '../Line';
import { Container } from '../Container';

const HeadeContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 290px;
  height: 100vh;
  background: ${colors.purple};
  box-shadow: 0 0 10px rgba(0, 0, 0, 5);
  position: sticky;
  top: 0;

  p {
    margin: 0 0 0.6rem 3rem;
    color: ${colors.ice};
  }
`;

const LinkContainer = styled.a`
  text-decoration: none;
  color: ${(props) => props.color || colors.ice};
  cursor: pointer;

  &:hover {
    color: ${colors.mint};
  }
`;
const Header = () => {
  /*O operador '!' diz pro TS que a variável não vai receber um valor nulo, 
  sem isso da erro pois o localStorage pode retornar um valor nulo e o JSON.parse 
  não funciona com nulo*/

  const user = JSON.parse(localStorage.getItem('user')!);
  const userName = user.name.split(' ')[0];
  //   console.log(user.name.split(' ')[0]);
  return (
    <>
      <HeadeContainer>
        <Logo margin='1.9rem 0 0 0' />
        <Container width='10rem' display='grid' margin='.5rem 0 0 0'>
          <p>{userName}</p>
          <LineContainer margin='0 0 .8rem 0' />
        </Container>
        <LinkContainer href='/meu-painel'>Serviços</LinkContainer>
        <LinkContainer href='/clientes'>Clientes</LinkContainer>
        <LinkContainer>Estoque</LinkContainer>
        {user.type === 'gestor' && (
          <>
            <LinkContainer>Funcionários</LinkContainer>
            <LinkContainer>Painel Financeiro</LinkContainer>
          </>
        )}
      </HeadeContainer>
    </>
  );
};

export default Header;
