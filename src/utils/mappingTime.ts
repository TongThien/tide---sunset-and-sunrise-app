export const mappingTime = (times:number[])=>{
    const nextDay = times.map(i=>i+24)
    const next2Days = nextDay.map(i=>i+24)
    return [...times,...nextDay,...next2Days]
}