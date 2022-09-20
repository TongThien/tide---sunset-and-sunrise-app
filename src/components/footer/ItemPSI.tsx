import styled from 'styled-components';
import { Flex } from '../../core/UI/Flex';

interface IProps {
  color?: string;
  value: number;
}

const Container = styled(Flex)`
  background: ${(props) => props.color};
  width: 40px;
  height: 36px;
  justify-content: center;
  align-items: center;
  margin: 7px auto;
  font-size: 30px;
  border-radius: 4px;
`;

const ItemPSI = (props: IProps) => {
  const { color = '#1ae863', value } = props;
  return <Container color={color}>{value}</Container>;
};

export default ItemPSI;
