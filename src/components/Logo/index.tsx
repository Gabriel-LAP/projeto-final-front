import logo from '../../assets/LOGO2.png';

import styled from 'styled-components';
type LogoProps = {
  margin?: string;
};

const LogoContainer = styled.img<LogoProps>`
  height: 150px;
  margin: ${(props) => props.margin};
`;

const Logo: React.FC<LogoProps> = ({ margin }) => {
  return <LogoContainer src={logo} alt='Logo' margin={margin} />;
};

export default Logo;
