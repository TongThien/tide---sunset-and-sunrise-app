import { convertMinsToHrsMins } from './covertMinsToHrsMins';
import { useConstant } from './useConstant';

export const setTimePoint = (times: number[], yCoordinate: number, tideHeight?: number) => {
  const { DEFAULT_POINT } = useConstant();
  return times.map((i) => {
    return {
      x: i * DEFAULT_POINT,
      y: yCoordinate,
      time: convertMinsToHrsMins(i),
      tideHeight: tideHeight
    };
  });
};
