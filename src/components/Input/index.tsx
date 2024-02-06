import styled from 'styled-components';
import { colors } from '../../colors';

type InputProps = {
  width?: string;
  height?: string;
  type?: string;
  placeholder?: string;
  margin?: string;
  borderbcolor?: string;
  value?: string | number;
  name?: string;
  backgroundcolor?: string;
  hoverColor?: string;
  color?: string;
  infoPanel?: boolean;
};

const InputContainer = styled.input<InputProps>`
  ${(props) =>
    props.infoPanel === false &&
    `
      outline: none;
      border: none;
      border-radius: none;
  `}

  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  width: ${(props) => props.width || '400px'};
  height: ${(props) => props.height || '300px'};
  type: ${(props) => props.type || 'text'};
  placeholder: ${(props) => props.placeholder};
  margin: ${(props) => props.margin};

  padding: 10px;

  border-radius: 1px;
  border: none;
  border-bottom: 2px solid ${(props) => props.borderbcolor || colors.mint};
  transition: border-color 0.1s, border-radius 0.3s;
  background-color: ${(props) => props.backgroundcolor || colors.purple};
  color: ${(props) => props.color || colors.mint};
  font-size: 1rem;

  &::placeholder {
    color: ${(props) => props.hoverColor || colors.mint};
    font-size: 1rem;
  }

  &:focus {
    background-color: ${(props) => props.backgroundcolor || colors.ice};
    outline: 2px solid ${colors.mint};
    border-radius: 10px;
    border: none;
    color: ${colors.purple};

    &::placeholder {
      color: ${colors.purple};
    }
  }
`;

export { InputContainer };
