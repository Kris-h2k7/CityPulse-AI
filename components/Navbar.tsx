 "use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Menu, X } from "lucide-react";
import { useState } from "react";
const links=[{href:"/",label:"Overview"},{href:"/dashboard",label:"Live dashboard"},{href:"/experiments",label:"Experiments"},{href:"/about",label:"Documentation"}];
export default function Navbar(){
 const path=usePathname(); const [open,setOpen]=useState(false);
 return <header className="sticky top-0 z-50 border-b border-white/80 bg-white/85 backdrop-blur-xl">
  <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
   <Link href="/" className="flex items-center gap-3" aria-label="CityPulse home"><span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-200"><Activity size={21}/></span><span><span className="block text-[17px] font-extrabold tracking-tight">citypulse<span className="text-blue-600">.ai</span></span><span className="block text-[10px] font-semibold uppercase tracking-[.2em] text-slate-400">Urban intelligence</span></span></Link>
   <nav className="hidden items-center gap-1 md:flex">{links.map(l=><Link key={l.href} href={l.href} className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${path===l.href?"bg-blue-50 text-blue-700":"text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}>{l.label}</Link>)}</nav>
   <Link href="/dashboard" className="hidden rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-700 md:block">Open live view ↗</Link>
   <button onClick={()=>setOpen(!open)} className="rounded-xl border border-slate-200 p-2 md:hidden" aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
  </div>
  {open&&<nav className="grid gap-1 border-t border-slate-100 bg-white p-4 md:hidden">{links.map(l=><Link onClick={()=>setOpen(false)} key={l.href} href={l.href} className="rounded-xl px-4 py-3 font-medium hover:bg-blue-50">{l.label}</Link>)}</nav>}
 </header>
}