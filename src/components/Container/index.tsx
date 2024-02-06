import styled from 'styled-components';

type ContainerProps = {
  display?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  gap?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  alignItems?: string;
  justifyContent?: string;
};

const Container = styled.div<ContainerProps>`
  display: ${(props) => props.display || 'flex'};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  gap: ${(props) => props.gap};
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  grid-template-rows: ${(props) => props.gridTemplateRows};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;

export { Container };
