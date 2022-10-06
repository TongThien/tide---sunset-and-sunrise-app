import { memo } from 'react';
import { useConstant } from '../../../utils/useConstant';

const NightBackground = () => {
  const { DEFAULT_HEIGHT, NIGHT_TIME_POINT } = useConstant();
  return (
    <g>
      {NIGHT_TIME_POINT.map((i: any) => {
        return (
          <rect x={i.x} y={0} width={i.width} height={DEFAULT_HEIGHT} opacity="0.7" key={i.x} />
        );
      })}
    </g>
  );
};

export default memo(NightBackground);
