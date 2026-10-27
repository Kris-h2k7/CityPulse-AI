"use client";
import type { Segment } from "@/lib/data";
function color(risk:number){return risk>=65?"#f07868":risk>=40?"#eab34f":"#42b99a"}
export default function TrafficMap({segments,onSelect,selected}:{segments:Segment[];onSelect?:(s:Segment)=>void;selected?:string}){
 return <div className="relative min-h-[330px] overflow-hidden rounded-[26px] border border-slate-100 bg-[#eef4f5]">
  <div className="absolute inset-0 opacity-70" style={{backgroundImage:"linear-gradient(30deg, transparent 47%, #dce8e8 48%, #dce8e8 49%, transparent 50%),linear-gradient(120deg, transparent 47%, #dce8e8 48%, #dce8e8 49%, transparent 50%)",backgroundSize:"95px 85px"}}/>
  <svg viewBox="0 0 600 360" className="absolute inset-0 h-full w-full" role="img" aria-label="Stylized map of central Chennai with colored traffic segments">
   <path d="M-20 80 C100 95 120 140 210 120 S360 80 620 135 M-20 255 C110 230 150 290 265 235 S420 205 620 265 M120 -20 C150 80 100 180 165 380 M350 -20 C330 90 390 150 355 380 M500 -20 C470 90 530 170 480 380" className="road"/>
   <path d="M-20 80 C100 95 120 140 210 120 S360 80 620 135 M-20 255 C110 230 150 290 265 235 S420 205 620 265 M120 -20 C150 80 100 180 165 380 M350 -20 C330 90 390 150 355 380 M500 -20 C470 90 530 170 480 380" className="road-core"/>
   <path d="M15 172 C150 155 210 180 300 165 S440 145 590 185" fill="none" stroke="#d2e0d9" strokeWidth="34" strokeLinecap="round"/>
   <path d="M15 172 C150 155 210 180 300 165 S440 145 590 185" fill="none" stroke="#fafffc" strokeWidth="25" strokeLinecap="round"/>
   <text x="28" y="36" className="map-label">CHENNAI · CENTRAL ZONE</text><text x="395" y="330" className="map-label">MARINA COASTAL BELT</text>
   {segments.map(s=><g key={s.id} onClick={()=>onSelect?.(s)} role="button" tabIndex={0} aria-label={`${s.name}, risk ${s.risk}`} style={{cursor:onSelect?"pointer":"default"}} onKeyDown={e=>{if(e.key==="Enter")onSelect?.(s)}}>
    <circle cx={s.x*6} cy={s.y*3.45} r={selected===s.id?15:11} fill={color(s.risk)} opacity=".16" className="pulse"/>
    <circle cx={s.x*6} cy={s.y*3.45} r={selected===s.id?7:5.5} fill={color(s.risk)} stroke="white" strokeWidth="2"/>
    <text x={s.x*6+10} y={s.y*3.45-10} fontSize="10" fill="#526176" fontWeight="700">{s.id}</text>
   </g>)}
  </svg>
  <div className="absolute bottom-3 left-3 flex gap-3 rounded-2xl border border-white/80 bg-white/90 px-3 py-2 text-[11px] font-semibold text-slate-500 shadow-sm backdrop-blur"><span><i className="mr-1 inline-block h-2 w-2 rounded-full bg-emerald-400"/>Low</span><span><i className="mr-1 inline-block h-2 w-2 rounded-full bg-amber-400"/>Moderate</span><span><i className="mr-1 inline-block h-2 w-2 rounded-full bg-rose-400"/>Elevated</span></div>
  <span className="absolute right-3 top-3 rounded-xl border border-white/80 bg-white/85 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Schematic map · not navigational</span>
 </div>
}