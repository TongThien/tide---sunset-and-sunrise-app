import styled from 'styled-components';
import { Flex } from '../../core/UI/Flex';
import ImageSrc from '../../core/UI/Image';

interface TempProps {
  value: number;
  img: 'temple' | 'water';
  style?: React.CSSProperties;
}

const HEAT_SYMBOL = '°C';
const WATER_SYMBOL = '%';

const ValueContent = styled.div`
  font-size: 24px;
`;

const Information = (props: TempProps) => {
  const { value, img, style } = props;
  return (
    <Flex style={style}>
      <ImageSrc name={img} height="24px" width="24px" />
      <ValueContent>{img === 'temple' ? value + HEAT_SYMBOL : value + WATER_SYMBOL}</ValueContent>
    </Flex>
  );
};

export default Information;
