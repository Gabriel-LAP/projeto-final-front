import styled from 'styled-components';
import { colors } from '../../colors';

type LineProps = {
  border?: string;
  width?: string;
  margin?: string;
};

export const LineContainer = styled.span<LineProps>`
  width: ${(props) => props.width || '170px'};
  border: ${(props) => props.border || `1px solid ${colors.blue}`};
  margin: ${(props) => props.margin || '0 0 0 0'};
`;
