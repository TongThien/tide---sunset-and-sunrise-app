import { memo, useEffect, useState } from 'react';
import { SUN_POINT_TIME, timeType } from '../../../utils/common';
import { mappingTime } from '../../../utils/mappingTime';
import { setTimePoint } from '../../../utils/setTime';

const SunTimePoint = () => {
  const [sunTime, setSunTime] = useState<timeType[]>();

  useEffect(() => {
    const xSunTime = mappingTime(SUN_POINT_TIME);
    const sunTime = setTimePoint(xSunTime, 275);
    setSunTime(sunTime);
  }, []);

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
