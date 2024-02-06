import styled from 'styled-components';
// import { Orders } from '../../types/Orders';
import { Container } from '../../components/Container';

type FinancialProps = {
  width?: string;
  height?: string;
  display?: string;
};

const FinancialContainer = styled.div<FinancialProps>`
  display: flex;
`;

const FinancialPanel = () => {
  return (
    <FinancialContainer>
      <Container></Container>
      <Container></Container>
    </FinancialContainer>
  );
};

export default FinancialPanel;
