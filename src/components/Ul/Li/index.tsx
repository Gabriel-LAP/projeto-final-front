import styled from 'styled-components';
import { colors } from '../../../colors';

type LineProps = {
  display?: string;
  width?: string;
  height?: string;
  margin?: string;
  backgroundcolor?: string;
  activebgcolor?: string;
  activecolor?: string;
  gridRowRepeate?: string;
  gap?: string;
  spanSpace?: boolean;
  alignItems?: string;
};

const LiContainer = styled.li<LineProps>`
  width: ${(props) => props.width || '65rem'};
  max-width: 65rem;
  height: ${(props) => props.height || '110px'};
  border: 1px solid ${colors.mint};
  border-radius: 10px;
  padding: 0.5rem 0.9rem 0.5rem 0.9rem;
  display: ${(prosp) => prosp.display || 'grid'};
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(${(props) => props.gridRowRepeate || '3, 25%'});
  flex-wrap: wrap;
  gap: ${(props) => props.gap || '0.5rem 0.8rem'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.alignItems || 'center'};
  margin: ${(props) => props.margin};
  color: ${colors.ice};
  background-color: ${colors.purple};
  //   cursor: pointer;

  transition: border-color 0.8s ease;

  //   &:hover {
  //     border: 3px solid ${colors.blue};
  //     border-radius: 10px;
  //     box-shadow: 0px 5px 10px rgba(0, 0, 0, 60);
  //   }

  //   &:active {
  //     background-color: ${(props) => props.activebgcolor};
  //     color: ${(props) => props.activecolor};
  //     transform: scale(0.95);
  //   }

  ${(props) =>
    props.spanSpace &&
    `span {
    &:nth-child(5) {
      grid-column: 1 / span 2;
    }}`}
`;

export { LiContainer };
