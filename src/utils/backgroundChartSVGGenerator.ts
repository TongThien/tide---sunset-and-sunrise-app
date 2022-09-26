import { area, curveBasis,  } from "d3"
import { flatMap,range } from "lodash"
import { DEFAULT_HEIGHT } from "./common"

export const backgroundChartSVGGenerator = ()=>{
    //24+24+12 = 60 hours => 60 point x
    const y = flatMap(range(0,30,1).map(i=>[50,150]))
    const backgroundPoints:any = range(0,60,1).map((x:number, i:number) => {
        return {
          x: x*300,
          y: DEFAULT_HEIGHT - y[i],
        }
      })
      const pathGen =  area().x((point:any)=>point.x).y0((point:any)=>point.y).y1(DEFAULT_HEIGHT).curve(curveBasis)

      return {
        points:backgroundPoints,
        path:pathGen(backgroundPoints) || undefined
      }
      
}