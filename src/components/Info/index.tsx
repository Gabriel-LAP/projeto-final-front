import styled from 'styled-components';
import { colors } from '../../colors';

type InfoProps = {
  width?: string;
  height?: string;
  display?: string;
};

const InfoContainer = styled.div<InfoProps>`
  width: ${(props) => props.width || '57rem'};
  max-width: 65rem;
  height: ${(props) => props.height || '110px'};
  //   border: 1px solid ${colors.mint};
  border-radius: 10px;
  padding: 2rem;
  display: ${(prosp) => prosp.display || 'grid'};
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(6, 15%);
  //   flex-wrap: wrap;
  //   gap: 0.1rem 0.1rem;
  align-items: center;
  justify-content: center;
  color: ${colors.ice};
  background-color: ${colors.purple};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 60);
  span {
    text-align: left;
    display: flex;
    align-items: center;
    // justify-content: center;
  }
`;

export { InfoContainer };
