import { area, curveBasis } from 'd3';
import { flatMap, range } from 'lodash';
import {
  DEFAULT_HEIGHT,
  DEFAULT_LOW_TIDE,
  DEFAULT_POINT,
  DEFAULT_TOP_TIDE,
  TIDE_POINT_TIME,
  TIDE_WITH_BACKGROUND_POINT_TIME
} from './common';
import { mappingTime } from './mappingTime';

export const backgroundChartSVGGenerator = () => {
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

  return {
    points: backgroundPoints,
    path: pathGen(backgroundPoints) || undefined
  };
};
