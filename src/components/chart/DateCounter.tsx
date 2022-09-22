import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
interface TimeProps {
  times: number;
  isChangeColor: boolean;
}

const Container = styled.div`
  position: absolute;
  bottom: 250px;
  left: 50%;
`;

const Date = styled.div`
  color: ${(props: { isChangeColor: boolean }) =>
    props.isChangeColor ? 'white' : undefined};
  fontsize: 17px;
  position: fixed;
  font-size: 23px;
`;

const DateCounter = (props: TimeProps) => {
  const { times, isChangeColor } = props;
  const [date, setDate] = useState(9);

  useEffect(() => {
    const day = Math.floor(times / 24);
    setDate(day + 1);
  }, [times]);

  const dateNode = useMemo(() => {
    switch (date) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }, [date]);

  return (
    <Container>
      <Date isChangeColor={isChangeColor}>
        {date}
        <sup style={{ marginRight: '4px' }}>{dateNode}</sup>
        November
      </Date>
    </Container>
  );
};

export default DateCounter;
