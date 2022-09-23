import { gsap } from 'gsap';
/* istanbul ignore next */
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
/* istanbul ignore next */
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getMainTimeCoordinate } from '../../common';
import SVGPath from './SVGPath';
import TimeCounter from './TimeCounter';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

const Container = styled.div`
  max-width: 1000px;
  overflow-x: auto;
  margin: auto;
  overflow-y: hidden;
  position: relative;
`;
const Title = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 20px;
`;

const DEFAULT_HOUR = 0;

const ChartContainer = () => {
  const [time, setTime] = useState<number>(DEFAULT_HOUR);
  const [date, setDate] = useState<number>(DEFAULT_HOUR);

  const [sunPosition, setSunPosition] = useState({ x: 0, y: 90 });
  const [isMoon, setIsMoon] = useState<boolean>(true);

  const canvasRef: any = useRef();
  const sunRef: any = useRef();
  const pathRef: any = useRef();

  const onScroll = useCallback(() => {
    let processScroll =
      canvasRef.current.scrollLeft /
      (canvasRef.current.scrollWidth - window.innerWidth / 2);
    let rawPath = MotionPathPlugin.getRawPath(pathRef.current);
    MotionPathPlugin.cacheRawPathMeasurements(rawPath);
    let point = MotionPathPlugin.getPositionOnPath(rawPath, processScroll);
    if (point.y < 93) {
      setIsMoon(true);
    } else {
      setIsMoon(false);
    }

    const mainCoordinate = getMainTimeCoordinate(Math.floor(point.x));

    setTime(mainCoordinate);
    setDate(processScroll * 60);

    setSunPosition({ x: point.x, y: point.y });
  }, [canvasRef, pathRef]);

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      canvasRef.current.addEventListener('scroll', onScroll, {
        behavior: 'smooth',
      });
    }
  }, [canvasRef, onScroll]);

  return (
    <Container ref={canvasRef as any}>
      <Title>
        <div style={{ position: 'fixed' }}>
          <span style={{ color: '#80dcff' }}>Tide</span>
          <span style={{ color: '#afc7d0', fontSize: '20px' }}>•</span>
          <span style={{ color: '#f98a00' }}> Sunrise & Sunset</span>
        </div>
      </Title>
      <TimeCounter minutes={time} />
      <SVGPath
        times={date}
        pathRef={pathRef}
        sunRef={sunRef}
        isMoon={isMoon}
        sunPosition={sunPosition}
      />
    </Container>
  );
};

export default ChartContainer;
