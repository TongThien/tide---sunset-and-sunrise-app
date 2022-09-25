import { memo } from "react"
import { DEFAULT_HEIGHT, NIGHT_TIME_POINT } from "../../../common"

const NightBackground = () => {
    return <g>
        {NIGHT_TIME_POINT.map((i: any) => {
            return (
                <rect
                    x={i.x}
                    y={0}
                    width={i.width}
                    height={DEFAULT_HEIGHT}
                    opacity='0.4'
                    key={i.x}
                />
            )
        })}
    </g>
}

export default memo(NightBackground)