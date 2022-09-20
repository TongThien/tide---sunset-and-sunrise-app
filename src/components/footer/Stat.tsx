import styled from 'styled-components';
import { Flex } from '../../core/UI/Flex';

import AddItem from './AddItem';
import StatItem, { Title } from './StatItem';

const Container = styled(Flex)`
  justify-content: center;
`;

const StatComponent = () => {
  return (
    <Container>
      <StatItem title={Title.PSI} value={23} />
      <StatItem title={Title.RAIN} />
      <StatItem title={Title.DENGUE} />
      <AddItem />
    </Container>
  );
};

export default StatComponent;
