import styled from 'styled-components';
import Login from '../Login';
import img from '../../assets/login-img.png';

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: 'Martian Mono', monospace;
  display: grid;
  grid-template-columns: 60% 40%;
`;

const ImgLoginContainer = styled.div`
  width: auto;
  height: 100vh;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <ImgLoginContainer />
      <Login />
    </HomeContainer>
  );
};

export default Home;
