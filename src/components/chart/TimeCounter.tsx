import { useMemo } from 'react';
import styled from 'styled-components';

interface TimeProps {
  minutes: number;
}

const Container = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
`;

const TimeContainer = styled.div`
  color: #5f5f5f;
  fontsize: 17px;
  position: fixed;
`;

const convertMinsToHrsMins = (minutes: number): string => {
  const day = minutes % 24;
  const decimal = day % 1;
  const hour = Math.floor(day);
  const minute = Math.floor(decimal * 60);
  if (hour > 12) {
    return `${hour - 12}:${minute > 9 ? `${minute}` : `0${minute}`} pm`;
  } else if (hour === 0) {
    return `${0}:${minute > 9 ? `${minute}` : `0${minute}`} am`;
  }
  return `${hour}:${minute > 9 ? `${minute}` : `0${minute}`} am`;
};

const TimeCounter = (props: TimeProps) => {
  const { minutes } = props;

  const time: string = useMemo(() => {
    return convertMinsToHrsMins(minutes);
  }, [minutes]);

  return (
    <Container>
      <TimeContainer>{time}</TimeContainer>
    </Container>
  );
};

export default TimeCounter;
