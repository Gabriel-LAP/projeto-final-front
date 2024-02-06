import styled from 'styled-components';
import { colors } from '../../../colors';

type LabelProps = {
  color?: string;
  fontsize?: string;
  margin?: string;
  width?: string;
  height?: string;
};

export const LabelContainer = styled.label<LabelProps>`
  color: ${(props) => props.color || colors.purple};
  font-size: ${(props) => props.fontsize || '1rem'};
  margin: ${(props) => props.margin};
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
