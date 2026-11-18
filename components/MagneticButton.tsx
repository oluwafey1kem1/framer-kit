import * as React from "react";
import { addPropertyControls, ControlType } from "framer";
type Props={label:string;href:string;strength:number;background:string;color:string;radius:number};
export default function MagneticButton({label="Let's talk",href="#",strength=12,background="#17211D",color="#FFFFFF",radius=999}:Props){
 const ref=React.useRef<HTMLAnchorElement>(null);const [offset,setOffset]=React.useState({x:0,y:0});
 const move=(e:React.MouseEvent)=>{const r=ref.current?.getBoundingClientRect();if(!r)return;setOffset({x:((e.clientX-r.left-r.width/2)/r.width)*strength,y:((e.clientY-r.top-r.height/2)/r.height)*strength})};
 return <a ref={ref} href={href} onMouseMove={move} onMouseLeave={()=>setOffset({x:0,y:0})} style={{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"15px 24px",borderRadius:radius,background,color,textDecoration:"none",font:"600 14px/1.2 inherit",transform:`translate3d(${offset.x}px,${offset.y}px,0)`,transition:"transform 180ms ease,background 180ms ease",willChange:"transform"}}>{label} <span aria-hidden="true" style={{marginLeft:12}}>↗</span></a>;
}
MagneticButton.defaultProps={width:180,height:54};
addPropertyControls(MagneticButton,{label:{type:ControlType.String},href:{type:ControlType.String},strength:{type:ControlType.Number,min:0,max:30},background:{type:ControlType.Color},color:{type:ControlType.Color},radius:{type:ControlType.Number,min:0,max:999}});
