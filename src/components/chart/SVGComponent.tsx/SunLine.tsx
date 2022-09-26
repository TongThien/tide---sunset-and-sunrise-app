import { memo } from 'react';

interface SunProps {
  sunLineRef: any;
  sunSVGPath?: string;
}

const SunLine = (props: SunProps) => {
  const { sunLineRef, sunSVGPath } = props;
  return (
    <g>
      <path fill="none" stroke="orange" ref={sunLineRef} d={sunSVGPath} />
    </g>
  );
};

export default memo(SunLine);
