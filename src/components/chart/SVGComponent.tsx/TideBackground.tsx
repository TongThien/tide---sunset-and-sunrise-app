import { area, curveBasis } from 'd3';
import { flatMap, range } from 'lodash';
import { memo } from 'react';
import { mappingTime } from '../../../utils/mappingTime';
import { useConstant } from '../../../utils/useConstant';

const TideBackground = () => {
  const {
    DEFAULT_HEIGHT,
    DEFAULT_LOW_TIDE,
    DEFAULT_POINT,
    DEFAULT_TOP_TIDE,
    TIDE_POINT_TIME,
    TIDE_WITH_BACKGROUND_POINT_TIME
  } = useConstant();
  const mappingPoint = mappingTime(
    [...TIDE_WITH_BACKGROUND_POINT_TIME, ...TIDE_POINT_TIME].sort((a, b) => a - b)
  );
  const initPoint = [0, ...mappingPoint, mappingPoint[mappingPoint.length - 1] + 4];
  const y = flatMap(
    range(0, initPoint.length / 2, 1).map((i) => [DEFAULT_TOP_TIDE, DEFAULT_LOW_TIDE])
  );

  const backgroundPoints: any = initPoint.map((x: number, i: number) => {
    return {
      x: x * DEFAULT_POINT,
      y: DEFAULT_HEIGHT - y[i]
    };
  });
  const pathGen = area()
    .x((point: any) => point.x)
    .y0((point: any) => point.y)
    .y1(DEFAULT_HEIGHT)
    .curve(curveBasis);

  return (
    <g>
      <path fill="#c1e5f7" stroke="none" d={pathGen(backgroundPoints) as any} opacity={0.8} />
    </g>
  );
};

export default memo(TideBackground);
