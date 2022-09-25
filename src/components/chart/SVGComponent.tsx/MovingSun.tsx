interface IProps {
    sunPosition: { x: number, y: number }
    isMoonTime: boolean
    date: number
}

const MovingSun = (props: IProps) => {
    const { sunPosition, isMoonTime, date } = props
    return (
        <>
            <g transform={`translate(${sunPosition.x},${isMoonTime ? 100 : sunPosition.y})`}>
                <image
                    href={isMoonTime ? '/images/moon.svg' : '/images/sunny.svg'}
                    height='20px'
                    width='20px'
                    y={-11}
                />
            </g>
            <g transform={`translate(${sunPosition.x},100)`}>
                <text
                    x='0'
                    y='-20'
                    fontSize={23}
                >
                    {date}th November
                </text>
                <line
                    x1={10}
                    x2={10}
                    y1={-20}
                    y2={300}
                    stroke='#bbbfc3'
                    strokeWidth='1'
                    fill='none'
                />
            </g>
        </>
    )
}

export default MovingSun