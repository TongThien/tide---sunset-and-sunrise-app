import { useMemo } from 'react';
import styled from 'styled-components';
import ItemPSI from './ItemPSI';

export enum Title {
  PSI = 'PSI',
  RAIN = 'RAIN',
  DENGUE = 'DENGUE',
}
enum Uom {
  MM = 'mm',
  GOOD = 'good',
}

interface ItemProps {
  value?: number;
  title: Title;
}

const Container = styled.div`
  width: 25%;
  max-width: 100px;
  background-image: linear-gradient(#70b9ff, #fff);
  background-repeat: no-repeat;
  background-size: 1px 100%;
  background-position-x: right;
  padding: 10px 0;
  color: white;
  text-align: center;
`;

const RainContent = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 30px;
`;

const CircleImg = styled.div`
  background: #82b6f7;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 8px auto auto;
  border: 2px solid;
`;

const StatItem = (props: ItemProps) => {
  const { value = 0, title } = props;
  const unitNode = useMemo(() => {
    switch (title) {
      case Title.PSI:
        return Uom.GOOD;
      case Title.RAIN:
        return Uom.MM;
      default:
        return null;
    }
  }, [title]);

  const contentNode = useMemo(() => {
    switch (title) {
      case Title.PSI:
        return <ItemPSI value={value} />;
      case Title.RAIN:
        return <RainContent>{value}</RainContent>;
      case Title.DENGUE:
        return <CircleImg />;
      default:
        /* istanbul ignore next */
        return null;
    }
  }, [title, value]);

  return (
    <Container>
      {title}
      {contentNode}
      <div style={{ fontSize: '13px' }}>{unitNode}</div>
    </Container>
  );
};

export default StatItem;
