import React from 'react'
const items = [
  {title:'High-quality leads', desc:'Targeted contract opportunities matched to your expertise.'},
  {title:'API-first', desc:'Integrate easily via REST API, webhooks, or SDK.'},
  {title:'Automated bid suggestions', desc:'AI-powered bid estimates to speed proposals.'},
]
export default function Features(){
  return (
    <section id="features" className="relative z-10 mt-8">
      <h3 className="text-2xl font-bold mb-6">Features</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(i=>(
          <div key={i.title} className="p-6 rounded-lg bg-slate-900/50 border border-slate-700">
            <h4 className="font-semibold mb-2 text-white">{i.title}</h4>
            <p className="text-slate-300 text-sm">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}