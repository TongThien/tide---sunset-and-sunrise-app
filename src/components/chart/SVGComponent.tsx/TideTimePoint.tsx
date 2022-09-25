import { memo, useEffect, useMemo, useState } from "react"
import { TIDE_POINT_TIME, TIDE_WITH_BACKGROUND_POINT_TIME, timeType } from "../../../common"
import { mappingTime } from "../../../utils/mappingTime"
import { setTimePoint } from "../../../utils/setTime"
interface TideProps {
    isBackground?: boolean
}

const TideTimePoint = ({ isBackground = false }: TideProps) => {
    const [tideTime, setTideTime] = useState<timeType[]>()

    useEffect(() => {
        if (isBackground) {
            const xBackgroundTideTime = mappingTime(TIDE_WITH_BACKGROUND_POINT_TIME)
            const backgroundTideTimne = setTimePoint(xBackgroundTideTime, 210, 0.5)
            setTideTime(backgroundTideTimne)


        } else {
            const xTideTime = mappingTime(TIDE_POINT_TIME)

            const tideTime = setTimePoint(xTideTime, 190, 0.8)

            setTideTime(tideTime)
        }

    }, [isBackground])

    const node = useMemo(() => {
        if (isBackground) {
            return <g>
                {tideTime?.map((i: any) => {
                    return (
                        <>
                            <rect
                                width={60}
                                height={30}
                                opacity='0.4'
                                x={i.x - 5}
                                y={i.y - 25}
                                fill="#f7f7f7"
                            />
                            <text x={i.x + 6} y={i.y - 12} fill="#70b9ff" fontSize={13}>
                                {i.tideHeight}m
                            </text>
                            <text x={i.x} y={i.y} fill="#70b9ff" fontSize={13}>
                                {i.time}
                            </text>
                        </>
                    )
                })}
            </g>
        }
        return <g>
            {tideTime?.map((i: any) => {
                return (
                    <>
                        <text key={i.x} x={i.x + 6} y={i.y - 12} fill="#70b9ff" fontSize={13}>
                            {i.tideHeight}m
                        </text>
                        <text key={i.y} x={i.x} y={i.y} fill="#70b9ff" fontSize={13}>
                            {i.time}
                        </text>
                    </>
                )
            })}
        </g>

    }, [isBackground, tideTime])


    return node
}

export default memo(TideTimePoint)