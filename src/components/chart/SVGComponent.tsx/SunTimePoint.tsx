import { memo, useEffect, useState } from 'react';
import { timeType } from '../../../utils/common';
import { convertMinsToHrsMins } from '../../../utils/covertMinsToHrsMins';

import { mappingTime } from '../../../utils/mappingTime';
import { useConstant } from '../../../utils/useConstant';

const SunTimePoint = () => {
  const { SUN_POINT_TIME } = useConstant();
  const [sunTime, setSunTime] = useState<timeType[]>();
  const { DEFAULT_POINT } = useConstant();

  const setTimePoint = (times: number[], yCoordinate: number, tideHeight?: number) => {
    return times.map((i) => {
      return {
        x: i * DEFAULT_POINT,
        y: yCoordinate,
        time: convertMinsToHrsMins(i),
        tideHeight: tideHeight
      };
    });
  };

  useEffect(() => {
    const xSunTime = mappingTime(SUN_POINT_TIME);
    const sunTime = setTimePoint(xSunTime, 275);
    setSunTime(sunTime);
  }, [DEFAULT_POINT]);

  return (
    <g>
      {sunTime?.map((i: any) => {
        return (
          <text key={i.x} x={i.x} y={i.y} fill="orange" fontSize={13} fontWeight={600}>
            {i.time}
          </text>
        );
      })}
    </g>
  );
};

export default memo(SunTimePoint);
