import { curveCardinal, line } from 'd3';
import { flatMap, range } from 'lodash';
import { DAYS, DEFAULT_HEIGHT, DEFAULT_POINT } from './common';

const MORNING_TIME_POINT = range(7, DAYS, 6).map((i) => i);

export const sunChartSVGGenerator = () => {
  const y = flatMap(range(0, MORNING_TIME_POINT.length / 2, 1).map((i) => [0, 130, 0, -130]));
  const morningPoints: any = MORNING_TIME_POINT.map((x: number, i: number) => {
    return {
      x: x * DEFAULT_POINT,
      y: DEFAULT_HEIGHT - y[i]
    };
  });
  const pathGen = line()
    .x((p: any) => p.x)
    .y((p: any) => p.y)
    .curve(curveCardinal);

  return {
    points: morningPoints,
    path: pathGen(morningPoints) || undefined
  };
};
