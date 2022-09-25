
export interface timeType {
    x: number,
    y: number,
    time: string
}


export const DEFAULT_WIDTH = 4000
export const DEFAULT_HEIGHT = 280
export const DEFAULT_POINT = DEFAULT_WIDTH / 60
export const SUN_POINT_TIME = [7.1, 19.16]
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
}]




export const SVG_PATH = 'M 1 90 l 305 0 M 321 290 L 380 275 M 380 275 q 338 -261 677 -5 L 1120 290 M 1120 90 l 515 0 M 1653 290 L 1705 290 M 1705 275 q 338 -261 677 -5 L 2455 290 M 2454 90 M 2454 90 l 530 0 M 2999 290 L 3045 290 M 3045 275 q 338 -261 677 -5 L 3786 290 M 3787 90 M 3787 90 l 211 0'

export const EXACTLY_TIME_POINT: any = {
    137: 2.75,
    380: 7.09,
    420: 7.75,
    642: 11.75,
    805: 14.75,
    1054: 19.16,
    1085: 19.75,
    1252: 22.75,
    1476: 26.75,
    1715: 31.09,
    1750: 31.75,
    1975: 35.75,
    2138: 38.75,
    2387: 43.16,
    2418: 43.75,
    2585: 46.75,
    2808: 50.75,
    3046: 55.09,
    3086: 55.75,
    3305: 59.75,
    3472: 62.75,
    3717: 67.16,
    3753: 67.75,

}

export const getMainTimeCoordinate = (value: number) => {
    if (value >= 132 && value <= 142) {
        return EXACTLY_TIME_POINT[137]
    }
    if (value >= 375 && value <= 385) {
        return EXACTLY_TIME_POINT[380]
    }
    if (value >= 415 && value <= 425) {
        return EXACTLY_TIME_POINT[420]
    }
    if (value >= 637 && value <= 647) {
        return EXACTLY_TIME_POINT[642]
    }
    if (value >= 800 && value <= 810) {
        return EXACTLY_TIME_POINT[805]
    }
    if (value >= 1049 && value <= 1059) {
        return EXACTLY_TIME_POINT[1054]
    }
    if (value >= 1080 && value <= 1090) {
        return EXACTLY_TIME_POINT[1085]
    }
    if (value >= 1247 && value <= 1257) {
        return EXACTLY_TIME_POINT[1252]
    }
    if (value >= 1471 && value <= 1481) {
        return EXACTLY_TIME_POINT[1476]
    }
    if (value >= 1710 && value <= 1720) {
        return EXACTLY_TIME_POINT[1715]
    }
    if (value >= 1745 && value <= 1755) {
        return EXACTLY_TIME_POINT[1750]
    }
    if (value >= 1970 && value <= 1980) {
        return EXACTLY_TIME_POINT[1975]
    }
    if (value >= 2133 && value <= 2143) {
        return EXACTLY_TIME_POINT[2138]
    }
    if (value >= 2382 && value <= 2392) {
        return EXACTLY_TIME_POINT[2387]
    }
    if (value >= 2423 && value <= 2433) {
        return EXACTLY_TIME_POINT[2418]
    }
    if (value >= 2580 && value <= 2590) {
        return EXACTLY_TIME_POINT[2585]
    }
    if (value >= 2803 && value <= 2813) {
        return EXACTLY_TIME_POINT[2808]
    }
    if (value >= 3041 && value <= 3051) {
        return EXACTLY_TIME_POINT[3046]
    }
    if (value >= 3081 && value <= 3091) {
        return EXACTLY_TIME_POINT[3086]
    }
    if (value >= 3300 && value <= 3310) {
        return EXACTLY_TIME_POINT[3305]
    }
    if (value >= 3467 && value <= 3477) {
        return EXACTLY_TIME_POINT[3472]
    }
    if (value >= 3712 && value <= 3722) {
        return EXACTLY_TIME_POINT[3717]
    }
    return undefined
}

export const getMainTimeCoordinate1 = (value: number): number => {
    if (value >= 137 && value <= 380) {
        return EXACTLY_TIME_POINT[137]
    }
    if (value >= 380 && value <= 420) {
        return EXACTLY_TIME_POINT[380]
    }
    if (value >= 420 && value <= 642) {
        return EXACTLY_TIME_POINT[420]
    }
    if (value >= 642 && value <= 805) {
        return EXACTLY_TIME_POINT[642]
    }
    if (value >= 805 && value <= 1054) {
        return EXACTLY_TIME_POINT[805]
    }
    if (value >= 1054 && value <= 1085) {
        return EXACTLY_TIME_POINT[1054]
    }
    if (value >= 1085 && value <= 1252) {
        return EXACTLY_TIME_POINT[1085]
    }
    if (value >= 1252 && value <= 1476) {
        return EXACTLY_TIME_POINT[1252]
    }
    if (value >= 1476 && value <= 1715) {
        return EXACTLY_TIME_POINT[1476]
    }
    if (value >= 1715 && value <= 1750) {
        return EXACTLY_TIME_POINT[1715]
    }
    if (value >= 1750 && value <= 1975) {
        return EXACTLY_TIME_POINT[1750]
    }
    if (value >= 1975 && value <= 2138) {
        return EXACTLY_TIME_POINT[1975]
    }
    if (value >= 2138 && value <= 2387) {
        return EXACTLY_TIME_POINT[2138]
    }
    if (value >= 2387 && value <= 2418) {
        return EXACTLY_TIME_POINT[2387]
    }
    if (value >= 2418 && value <= 2585) {
        return EXACTLY_TIME_POINT[2418]
    }
    if (value >= 2585 && value <= 2808) {
        return EXACTLY_TIME_POINT[2585]
    }
    if (value >= 2808 && value <= 3046) {
        return EXACTLY_TIME_POINT[2808]
    }
    if (value >= 3046 && value <= 3086) {
        return EXACTLY_TIME_POINT[3046]
    }
    if (value >= 3086 && value <= 3305) {
        return EXACTLY_TIME_POINT[3086]
    }
    if (value >= 3305 && value <= 3472) {
        return EXACTLY_TIME_POINT[3305]
    }
    if (value >= 3472 && value <= 3717) {
        return EXACTLY_TIME_POINT[3472]
    }
    if (value >= 3717 && value <= 3753) {
        return EXACTLY_TIME_POINT[3717]
    }
    return 0
}


