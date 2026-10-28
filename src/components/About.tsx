"use client";
import { useState } from "react";
export default function About() {
 const [expanded,setExpanded]=useState(false);
 return <section id="about" className="about"><div className="about-json"><p className="json-title">&#123; &#125; <span>about-me.json</span></p><pre>{`{\n  "firstName": "Jiang",\n  "lastName": "Chang",\n  "nickname": "JJ",\n  "zodiacSign": "Libra",\n  "mbti": "ENFJ"${expanded?',\n  "birthYear": 1991,\n  "music": ["Acoustic", "Piano", "Classical", "Folk", "Beatles"]':''}\n}`}</pre><button className="expand" onClick={()=>setExpanded(v=>!v)} aria-expanded={expanded}>{expanded?'▾ less about me':'▸ ... more about me'}</button></div><div className="faq"><h2>FAQ</h2><p>Common Questions<br/>About Me</p><a href="mailto:hello@example.com" aria-label="Email placeholder">→</a></div></section>;
}
