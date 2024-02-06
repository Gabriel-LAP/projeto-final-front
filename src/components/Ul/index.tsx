import styled from 'styled-components';
import { colors } from '../../colors';

type UlComtainerProps = {
  padding: string;
  display?: string;
};

const UlComtainer = styled.ul<UlComtainerProps>`
  display: ${(props) => props.display || 'flex'};
  flex-direction: column;
  //   justify-content: space-evenly;
  align-items: center;
  gap: 1.5rem 0;
  overflow: auto;
  padding: ${(props) => props.padding};
  height: 100%;
  width: 100%;
  background: ${colors.darckIce};
  //   margin: auto;
  //   border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 5) i;
  overflow-x: hidden;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 0.5rem;
    width: 0.7rem;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.purple};
    border-radius: 10px;
  }

  .first-li {
    margin-top: 10px;
  }
`;

export { UlComtainer };
