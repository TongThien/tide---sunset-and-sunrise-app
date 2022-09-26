
export interface timeType {
    x: number,
    y: number,
    time: string
}

export const DAYS = 24*3

export const DEFAULT_WIDTH = 4000
export const DEFAULT_HEIGHT = 280
export const DEFAULT_POINT = DEFAULT_WIDTH / DAYS
export const SUN_POINT_TIME = [7.09, 19.16]
export const TIDE_WITH_BACKGROUND_POINT_TIME = [2.75, 11.75, 19.75]
export const TIDE_POINT_TIME = [7.75, 14.75, 22.75]
const FIRST_DAY_TIME_POINT = [2.75, 7.1, 7.75, 11.75, 14.75, 19.15, 19.75, 22.75]
const SECOND_DAY_TIME_POINT = FIRST_DAY_TIME_POINT.map(i => i + 24)
const THIRD_DAY_TIME_POINT = SECOND_DAY_TIME_POINT.map(i => i + 24)

export const TIME_POINT = [...FIRST_DAY_TIME_POINT, ...SECOND_DAY_TIME_POINT, ...THIRD_DAY_TIME_POINT]

export const DEFAULT_DATE = 9

export const NIGHT_TIME_POINT = [{
    x: 0,
    width: 6 * DEFAULT_POINT,
},
{
    x: 20 * DEFAULT_POINT,
    width: 10 * DEFAULT_POINT,
},
{
    x: 44 * DEFAULT_POINT,
    width: 10 * DEFAULT_POINT,
},
{
    x: 68 * DEFAULT_POINT,
    width: 10 * DEFAULT_POINT,
}
]



