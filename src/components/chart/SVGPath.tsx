import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SVG_PATH } from '../../common';

interface SProps {
  pathRef: any;
  sunRef: any;
  isMoon: boolean;
  sunPosition: { x: number; y: number };
  times: number;
}

const BackgroundCanvas = styled.canvas`
  background-image: url('/images/chart.png');
  background-size: 100% 280px;
`;

const SVGPath = (props: SProps) => {
  const { pathRef, sunRef, isMoon, sunPosition, times } = props;
  const [date, setDate] = useState(0);

  useEffect(() => {
    const day = Math.floor(times / 24);
    setDate(day + 9);
  }, [times]);

  return (
    <>
      <BackgroundCanvas width={4000} height={280}></BackgroundCanvas>

      <div
        style={{
          position: 'absolute',
          left: '0',
          top: '-30px',
        }}
      >
        <svg height='280' width='4000'>
          <g>
            <path
              ref={pathRef}
              id='path'
              d={SVG_PATH}
              stroke='transparent'
              strokeWidth='3'
              fill='none'
            />
          </g>

          <g transform={`translate(${sunPosition.x},${sunPosition.y})`}>
            <image
              ref={sunRef}
              href={isMoon ? '/images/moon.svg' : '/images/sunny.svg'}
              height='20px'
              width='20px'
            ></image>
          </g>
          <g transform={`translate(${sunPosition.x},100)`}>
            <text
              x='0'
              y='-20'
              fill={isMoon ? 'white' : undefined}
              fontSize={23}
            >
              {date}th November
            </text>
            <line
              x1={10}
              x2={10}
              y1={-20}
              y2={300}
              stroke='#bbbfc3'
              strokeWidth='1'
              fill='none'
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default SVGPath;
