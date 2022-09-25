import { useCallback, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { DEFAULT_DATE, DEFAULT_HEIGHT, DEFAULT_POINT, DEFAULT_WIDTH } from "../../common"


import { convertMinsToHrsMins } from "./TimeCounter"

import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { sunChartSVGGenerator } from "../../utils/sunChartSVGGenerator"
import MovingSun from "./SVGComponent.tsx/MovingSun"
import NightBackground from "./SVGComponent.tsx/NightBackground"
import SunLine from "./SVGComponent.tsx/SunLine"
import SunTimePoint from "./SVGComponent.tsx/SunTimePoint"
import TideBackground from "./SVGComponent.tsx/TideBackground"
import TideTimePoint from "./SVGComponent.tsx/TideTimePoint"
import TitleComponent from "./TitleComponent"


const Container = styled.div`
max-width:1000px;
margin:auto;
position: relative;
`

const ChartSvg = styled.div`
height: 100%;
overflow-x: scroll;
scroll-behavior: smooth;
padding-bottom:20px;
`

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
  const chartRef: any = useRef()
  const sunLineRef = useRef('')

  const { path: sunSVGPath, points: sunPoints } = sunChartSVGGenerator()
  const [sunPosition, setSunPosition] = useState(sunPoints[0])
  const [time, setTime] = useState<string>(convertMinsToHrsMins(sunPoints[0].x / (DEFAULT_POINT)))
  const [moonTime, setIsMoonTime] = useState<boolean>(false)
  const [date, setDate] = useState<number>(DEFAULT_DATE);


  const positionSunHandler = useCallback(() => {
    let chartSVGEl = chartRef.current
    let scrollPercentage =
      chartSVGEl.scrollLeft / (chartSVGEl.scrollWidth - 700)
    if (scrollPercentage > 1) scrollPercentage = 1

    let rawPath = MotionPathPlugin.getRawPath(sunLineRef.current)
    MotionPathPlugin.cacheRawPathMeasurements(rawPath)
    let point = MotionPathPlugin.getPositionOnPath(rawPath, scrollPercentage)

    const times = point.x / (DEFAULT_POINT)
    const day = Math.floor(times / 24);

    if (point.y > 300) {
      setIsMoonTime(true)
    } else {
      setIsMoonTime(false)
    }
    setSunPosition(point)

    setDate(day + DEFAULT_DATE);
    setTime(convertMinsToHrsMins(times))
  }, [sunLineRef, chartRef])

  useEffect(() => {
    chartRef.current.addEventListener('scroll', positionSunHandler)
    return chartRef.current.removeEventListener('scroll', () => { })
  }, [])


  return (
    <Container>
      <ChartSvg ref={chartRef}>
        <svg height={DEFAULT_HEIGHT} width={DEFAULT_WIDTH}>
          <TideBackground />
          <NightBackground />
          <SunLine sunLineRef={sunLineRef} sunSVGPath={sunSVGPath} />
          <SunTimePoint />
          <TideTimePoint />
          <TideTimePoint isBackground />
          <MovingSun isMoonTime={moonTime} sunPosition={sunPosition} date={date} />
        </svg>
      </ChartSvg>
      <TimeContainer><ChartTime>{time}</ChartTime></TimeContainer>
      <TitleComponent />
    </Container>
  )
}

export default ChartContainer