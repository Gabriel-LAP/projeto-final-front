import styled from 'styled-components';
import { colors } from '../../colors';
import { CSSProperties } from 'react';

type ButtonProps = {
  width?: string;
  height?: string;
  backgroundcolor?: string;
  activebgcolor?: string;
  activecolor?: string;
  type?: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  display?: string;
  boxshadow?: string;
  style?: CSSProperties;
  diabledB?: boolean;
  margin?: string;
};

const ButtonContainer = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};

  transition: border-color 1s ease;

  &:hover {
    border: 1px solid ${colors.blue};
    border-radius: 10px;
    box-shadow: ${(props) => props.boxshadow};
  }

  &:active {
    background-color: ${(props) => props.activebgcolor};
    color: ${(props) => props.activecolor};
    transform: scale(0.9);
  }
`;

const Button = ({
  text,
  ...props
}: { text: string | JSX.Element } & ButtonProps) => {
  return (
    <ButtonContainer {...props} disabled={props.diabledB}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
