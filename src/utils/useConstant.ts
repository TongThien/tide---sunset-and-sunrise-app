import { useContext, useEffect, useState } from 'react';

export const useConstant = () => {
  const [width, setWidth] = useState<number>(window.innerWidth * 3);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth * 3);
    });
  }, []);
  const DAYS = 24 * 3;

  const DEFAULT_HEIGHT = 280;
  const DEFAULT_TOP_TIDE = 150;
  const DEFAULT_LOW_TIDE = 50;
  const DEFAULT_POINT = width / DAYS;
  const SUN_POINT_TIME = [7.09, 19.16];
  const TIDE_WITH_BACKGROUND_POINT_TIME = [2.75, 11.75, 19.75];
  const TIDE_POINT_TIME = [7.75, 14.75, 22.75];

  const DEFAULT_DATE = 9;

  const NIGHT_TIME_POINT = [
    {
      x: 0,
      width: 6 * DEFAULT_POINT
    },
    {
      x: 20 * DEFAULT_POINT,
      width: 10 * DEFAULT_POINT
    },
    {
      x: 44 * DEFAULT_POINT,
      width: 10 * DEFAULT_POINT
    },
    {
      x: 68 * DEFAULT_POINT,
      width: 10 * DEFAULT_POINT
    }
  ];
  return {
    DAYS,
    DEFAULT_WIDTH: width,
    DEFAULT_HEIGHT,
    DEFAULT_TOP_TIDE,
    DEFAULT_LOW_TIDE,
    DEFAULT_POINT,
    SUN_POINT_TIME,
    TIDE_WITH_BACKGROUND_POINT_TIME,
    TIDE_POINT_TIME,
    DEFAULT_DATE,
    NIGHT_TIME_POINT
  };
};
