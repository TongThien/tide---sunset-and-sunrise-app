import styled from 'styled-components';
import WeatherInformation from './content/WeatherInfomation';
import StatComponent from './footer/Stat';
import HeaderTop from './header/MenuTop';

const Container = styled.div`
  margin: auto;
  max-width: 1000px;
`;

const HeaderContent = () => {
  return (
    <Container>
      <HeaderTop />
      <WeatherInformation />
      <StatComponent />
    </Container>
  );
};

export default HeaderContent;
