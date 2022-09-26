export interface timeType {
  x: number;
  y: number;
  time: string;
  tideHeight?: number;
}

export const DAYS = 24 * 3;

export const DEFAULT_WIDTH = 4000;
export const DEFAULT_HEIGHT = 280;
export const DEFAULT_TOP_TIDE = 150;
export const DEFAULT_LOW_TIDE = 50;
export const DEFAULT_POINT = DEFAULT_WIDTH / DAYS;
export const SUN_POINT_TIME = [7.09, 19.16];
export const TIDE_WITH_BACKGROUND_POINT_TIME = [2.75, 11.75, 19.75];
export const TIDE_POINT_TIME = [7.75, 14.75, 22.75];

export const DEFAULT_DATE = 9;

export const NIGHT_TIME_POINT = [
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
