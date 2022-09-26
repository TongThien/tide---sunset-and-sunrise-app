import { DEFAULT_POINT } from "./common"
import { convertMinsToHrsMins } from "../components/chart/TimeCounter"

export const setTimePoint = (times:number[],yCoordinate:number,tideHeight?:number)=>{
    return times.map(i=>{
        return {
            x:i*DEFAULT_POINT,
            y:yCoordinate,
            time:convertMinsToHrsMins(i),
            tideHeight:tideHeight
        }
    })
}