import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import DateCounter from './DateCounter';
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

const ChartContainer = () => {
  const [time, setTime] = useState<number>(6.9);

  const [sunPosition, setSunPosition] = useState({ x: 0, y: 0 });
  const [isMoon, setIsMoon] = useState<boolean>(false);

  const canvasRef: any = useRef();
  const sunRef: any = useRef();
  const pathRef: any = useRef();

  const onScroll = useCallback(() => {
    let scrollPercentage =
      canvasRef.current.scrollLeft /
      (canvasRef.current.scrollWidth - window.innerWidth / 2);
    let rawPath = MotionPathPlugin.getRawPath(pathRef.current);
    MotionPathPlugin.cacheRawPathMeasurements(rawPath);
    let point = MotionPathPlugin.getPositionOnPath(rawPath, scrollPercentage);

    if (point.y < 93) {
      setIsMoon(true);
    } else {
      setIsMoon(false);
    }

    setSunPosition({ x: point.x, y: point.y });

    setTime(scrollPercentage * 60 + 6.9);
  }, [canvasRef, pathRef]);

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      canvasRef.current.addEventListener('scroll', onScroll, { passive: true });
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
      <DateCounter times={time} isChangeColor={isMoon} />
      <TimeCounter minutes={time} />
      <SVGPath
        pathRef={pathRef}
        sunRef={sunRef}
        isMoon={isMoon}
        sunPosition={sunPosition}
      />
    </Container>
  );
};

export default ChartContainer;
