import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

type Props = { text: string; speed: number; direction: "left" | "right"; gap: number; pauseOnHover: boolean; color: string; background: string };
export default function Marquee({ text="Design with intention ✳ Build with care ✳", speed=32, direction="left", gap=36, pauseOnHover=true, color="#17211D", background="transparent" }: Props) {
  const [paused,setPaused]=React.useState(false);
  const items=Array.from({length:4},(_,i)=><span key={i} style={{paddingRight:gap,whiteSpace:"nowrap"}}>{text}</span>);
  return <div role="region" aria-label="Scrolling announcement" onMouseEnter={()=>pauseOnHover&&setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocus={()=>setPaused(true)} onBlur={()=>setPaused(false)} style={{overflow:"hidden",width:"100%",background,color}}>
    <div style={{display:"flex",width:"max-content",animation:`framer-marquee ${Math.max(5,100-speed)}s linear infinite`,animationDirection:direction==="right"?"reverse":"normal",animationPlayState:paused?"paused":"running"}}>{items}{items}</div>
    <style>{`@keyframes framer-marquee{to{transform:translateX(-50%)}}@media(prefers-reduced-motion:reduce){.never{animation:none!important}}`}</style>
  </div>;
}
Marquee.defaultProps={width:600,height:54};
addPropertyControls(Marquee,{text:{type:ControlType.String,title:"Text"},speed:{type:ControlType.Number,title:"Speed",min:10,max:90,step:1},direction:{type:ControlType.Enum,title:"Direction",options:["left","right"]},gap:{type:ControlType.Number,title:"Gap",min:8,max:120},pauseOnHover:{type:ControlType.Boolean,title:"Pause on hover"},color:{type:ControlType.Color,title:"Text"},background:{type:ControlType.Color,title:"Background"}});
