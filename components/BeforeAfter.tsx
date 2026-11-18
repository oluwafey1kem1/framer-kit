import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

type Props = { before: string; after: string; initial: number; labelBefore: string; labelAfter: string };

export default function BeforeAfter({ before="", after="", initial=50, labelBefore="Before", labelAfter="After" }: Props) {
  const [value,setValue] = React.useState(initial);
  return <div style={{position:"relative",width:"100%",height:"100%",minHeight:220,overflow:"hidden",borderRadius:12,background:"#e8e8e8"}}>
    {after && <img src={after} alt={labelAfter} style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}} />}
    {before && <img src={before} alt={labelBefore} style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",clipPath:`inset(0 ${100-value}% 0 0)`}} />}
    <span style={{position:"absolute",left:12,top:12,background:"#0009",color:"white",padding:"5px 9px",borderRadius:5,fontSize:12}}>{labelBefore}</span>
    <span style={{position:"absolute",right:12,top:12,background:"#0009",color:"white",padding:"5px 9px",borderRadius:5,fontSize:12}}>{labelAfter}</span>
    <input aria-label="Before and after comparison" type="range" min="0" max="100" value={value} onChange={e=>setValue(Number(e.target.value))} style={{position:"absolute",inset:"auto 12px 12px",width:"calc(100% - 24px)",accentColor:"white"}} />
  </div>;
}
BeforeAfter.defaultProps = { width:500, height:320 };
addPropertyControls(BeforeAfter, {
  before:{type:ControlType.Image,title:"Before"},
  after:{type:ControlType.Image,title:"After"},
  initial:{type:ControlType.Number,min:0,max:100},
  labelBefore:{type:ControlType.String},
  labelAfter:{type:ControlType.String}
});
