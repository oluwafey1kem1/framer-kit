import * as React from "react";
import { addPropertyControls, ControlType } from "framer";
type Props={value:number;duration:number;prefix:string;suffix:string;decimals:number;color:string;fontSize:number};
export default function CountUp({value=1200,duration=1.5,prefix="",suffix="+",decimals=0,color="#17211D",fontSize=48}:Props){
 const ref=React.useRef<HTMLSpanElement>(null);const [shown,setShown]=React.useState(0);
 React.useEffect(()=>{const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(reduce){setShown(value);return}let frame=0,start=0;const tick=(time:number)=>{if(!start)start=time;const p=Math.min(1,(time-start)/(duration*1000));const eased=1-Math.pow(1-p,3);setShown(value*eased);if(p<1)frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick);return()=>cancelAnimationFrame(frame)},[value,duration]);
 return <span ref={ref} aria-label={prefix+value.toFixed(decimals)+suffix} style={{fontSize,fontWeight:700,letterSpacing:"-.04em",color,fontVariantNumeric:"tabular-nums"}} aria-live="off">{prefix}{shown.toLocaleString(undefined,{minimumFractionDigits:decimals,maximumFractionDigits:decimals})}{suffix}</span>;
}
CountUp.defaultProps={width:180,height:60};
addPropertyControls(CountUp,{value:{type:ControlType.Number,title:"Value"},duration:{type:ControlType.Number,min:.2,max:8,step:.1},prefix:{type:ControlType.String},suffix:{type:ControlType.String},decimals:{type:ControlType.Number,min:0,max:3,step:1},color:{type:ControlType.Color},fontSize:{type:ControlType.Number,min:12,max:120}});
