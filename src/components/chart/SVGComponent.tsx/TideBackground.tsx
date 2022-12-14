import { memo } from 'react';
import { backgroundChartSVGGenerator } from '../../../utils/backgroundChartSVGGenerator';

const TideBackground = () => {
  const { path: backgroundSVGPath } = backgroundChartSVGGenerator();
  return (
    <g>
      <path fill="#c1e5f7" stroke="none" d={backgroundSVGPath} opacity={0.8} />
    </g>
  );
};

export default memo(TideBackground);
