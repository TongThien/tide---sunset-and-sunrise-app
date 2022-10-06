import { memo, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { timeType } from '../../../utils/common';
import { convertMinsToHrsMins } from '../../../utils/covertMinsToHrsMins';
import { mappingTime } from '../../../utils/mappingTime';
import { useConstant } from '../../../utils/useConstant';
interface TideProps {
  isBackground?: boolean;
}

const CustomText = styled.text`
  fill: #70b9ff;
  font-size: 13px;
  font-weight: 600;
`;

const TideTimePoint = ({ isBackground = false }: TideProps) => {
  const { TIDE_POINT_TIME, TIDE_WITH_BACKGROUND_POINT_TIME } = useConstant();
  const [tideTime, setTideTime] = useState<timeType[]>();
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
    if (isBackground) {
      const xBackgroundTideTime = mappingTime(TIDE_WITH_BACKGROUND_POINT_TIME);
      const backgroundTideTime = setTimePoint(xBackgroundTideTime, 240, 0.3);
      setTideTime(backgroundTideTime);
    } else {
      const xTideTime = mappingTime(TIDE_POINT_TIME);

      const tideTime = setTimePoint(xTideTime, 160, 0.5);

      setTideTime(tideTime);
    }
  }, [isBackground, DEFAULT_POINT]);

  const node = useMemo(() => {
    if (isBackground) {
      return (
        <g>
          {tideTime?.map((i: timeType, index: number) => {
            return (
              <>
                <rect
                  key={i.x}
                  width={65}
                  height={30}
                  opacity="0.4"
                  x={i.x - 5}
                  y={i.y - 25}
                  fill="#f7f7f7"
                />
                <CustomText key={i.y + index} x={i.x + 6} y={i.y - 12}>
                  {i.tideHeight}m
                </CustomText>
                <CustomText key={i.x + index + 1} x={i.x} y={i.y}>
                  {i.time}
                </CustomText>
              </>
            );
          })}
        </g>
      );
    }
    return (
      <g>
        {tideTime?.map((i: any) => {
          return (
            <>
              <CustomText key={i.x} x={i.x + 6} y={i.y - 12}>
                {i.tideHeight}m
              </CustomText>
              <CustomText key={i.y} x={i.x} y={i.y}>
                {i.time}
              </CustomText>
            </>
          );
        })}
      </g>
    );
  }, [isBackground, tideTime, DEFAULT_POINT]);

  return node;
};

export default memo(TideTimePoint);
