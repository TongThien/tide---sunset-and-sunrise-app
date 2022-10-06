import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';
import { sunChartSVGGenerator } from '../../utils/sunChartSVGGenerator';
import MovingSun from './SVGComponent.tsx/MovingSun';
import NightBackground from './SVGComponent.tsx/NightBackground';
import SunLine from './SVGComponent.tsx/SunLine';
import SunTimePoint from './SVGComponent.tsx/SunTimePoint';
import TideBackground from './SVGComponent.tsx/TideBackground';
import TideTimePoint from './SVGComponent.tsx/TideTimePoint';
import TitleComponent from './TitleComponent';
import { convertMinsToHrsMins } from '../../utils/covertMinsToHrsMins';
import { useConstant } from '../../utils/useConstant';

const Container = styled.div`
  margin: auto;
  position: relative;
`;

const ChartSvg = styled.div`
  overflow-x: auto;
  padding-bottom: 20px;
`;

const TimeContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
`;

const ChartTime = styled.div`
  color: #5f5f5f;
  fontsize: 17px;
`;

const ChartContainer = () => {
  const { DEFAULT_DATE, DEFAULT_HEIGHT, DEFAULT_POINT, DEFAULT_WIDTH } = useConstant();
  const chartRef: any = useRef();
  const sunLineRef = useRef('');

  const { path: sunSVGPath, points: sunPoints } = sunChartSVGGenerator();

  const [sunPosition, setSunPosition] = useState(sunPoints[0]);
  const [time, setTime] = useState<string>(convertMinsToHrsMins(sunPoints[0].x / DEFAULT_POINT));
  const [moonTime, setIsMoonTime] = useState<boolean>(false);
  const [date, setDate] = useState<number>(DEFAULT_DATE);

  /* istanbul ignore next */
  const positionSunHandler = useCallback(() => {
    const chartSVGEl = chartRef.current;
    const scrollPercentage = chartSVGEl.scrollLeft / (chartSVGEl.scrollWidth - window.innerWidth);

    const rawPath = MotionPathPlugin.getRawPath(sunLineRef.current);
    MotionPathPlugin.cacheRawPathMeasurements(rawPath);
    const point = MotionPathPlugin.getPositionOnPath(rawPath, scrollPercentage);

    const times = point.x / DEFAULT_POINT;
    const day = Math.floor(times / 24);

    if (point.y > 300) {
      setIsMoonTime(true);
    } else {
      setIsMoonTime(false);
    }
    setSunPosition(point);

    setDate(day + DEFAULT_DATE);
    setTime(convertMinsToHrsMins(times));
  }, [sunLineRef, chartRef, DEFAULT_POINT]);

  useEffect(() => {
    chartRef.current.addEventListener('scroll', positionSunHandler, {
      behavior: 'smooth'
    });
    return chartRef.current.removeEventListener('scroll', () => {});
  }, [positionSunHandler]);

  useEffect(()=>{
    setSunPosition(sunPoints[0])
  },[window.innerWidth])

  return (
    <Container>
      <ChartSvg ref={chartRef}>
        <svg height={DEFAULT_HEIGHT} width={DEFAULT_WIDTH}>
          <NightBackground />
          <TideBackground />
          <SunLine sunLineRef={sunLineRef} sunSVGPath={sunSVGPath} />
          <SunTimePoint />
          <TideTimePoint />
          <TideTimePoint isBackground />
          <MovingSun isMoonTime={moonTime} sunPosition={sunPosition} date={date} />
        </svg>
      </ChartSvg>
      <TimeContainer>
        <ChartTime>{time}</ChartTime>
      </TimeContainer>
      <TitleComponent />
    </Container>
  );
};

export default ChartContainer;
