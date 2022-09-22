import styled from 'styled-components';

interface SProps {
  pathRef: any;
  sunRef: any;
  isMoon: boolean;
  sunPosition: { x: number; y: number };
}

const BackgroundCanvas = styled.canvas`
  background-image: url('/images/chart.png');
  background-size: 100% 280px;
`;

const SVG_PATH =
  'M 115 285 q 335 -285 705 -5 M 863 92 L 1390 91 M 1295 441 L 1443 287 M 1444 285 q 355 -285 710 0 M 2200 92 L 2730 92 M 2656 462 L 2779 285 M 2780 285 q 335 -285 700 -5';

const SVGPath = (props: SProps) => {
  const { pathRef, sunRef, isMoon, sunPosition } = props;
  return (
    <>
      <BackgroundCanvas width={4000} height={280} />

      <div
        style={{
          position: 'absolute',
          left: '253px',
          top: '-30px',
        }}
      >
        <svg height='280' width='3550'>
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
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default SVGPath;
