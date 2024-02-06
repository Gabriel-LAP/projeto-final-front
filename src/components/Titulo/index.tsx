import styled from 'styled-components';

type TituloProps = {
  tamanhofonte: string;
  margin?: string;
  color: string;
  fontWeight?: string;
  boxShadow?: string;
  height?: string;
  width?: string;
  padding?: string;
};

const TituloContainer = styled.h1<TituloProps>`
  font-size: ${(props) => props.tamanhofonte};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  box-shadow: ${(props) => props.boxShadow};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
`;

export { TituloContainer };
