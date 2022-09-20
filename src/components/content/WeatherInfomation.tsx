import styled from 'styled-components';
import { Flex } from '../../core/UI/Flex';
import ImageSrc from '../../core/UI/Image';

import Information from './Information';

const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 100px;
  justify-content: center;
  display: flex;
`;

const Content = styled.div`
  color: white;
  margin-left: 30px;
`;

const WeatherInformation = () => {
  return (
    <Container>
      <ImageSrc name='cloud' width='70px' height='80px' />
      <Content>
        <Flex style={{ flexDirection: 'column' }}>
          <div style={{ fontSize: '40px' }}>Cloudy</div>
          <Flex>
            <Information
              value={29}
              img='temple'
              style={{ marginRight: '50px' }}
            />
            <Information value={27} img='water' />
          </Flex>
        </Flex>
      </Content>
    </Container>
  );
};

export default WeatherInformation;
