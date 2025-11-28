import React, {useEffect, useState} from 'react'

export default function Dashboard(){
  const [key, setKey] = useState(null)
  const [leads, setLeads] = useState([])
  const API = import.meta.env.VITE_API_URL || '/api'

  useEffect(()=>{
    // demo: register a temporary key on load (for preview only)
    async function getKey(){
      try{
        const res = await fetch(API + '/register', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email:'demo@contractleadgen.test'})})
        const j = await res.json()
        setKey(j.key)
        // fetch a generated lead
        const leadRes = await fetch(API + '/leads/generate', {method:'POST', headers:{'Content-Type':'application/json','X-API-KEY': j.key}, body: JSON.stringify({title:'Demo project', description:'Demo description'})})
        const leadJson = await leadRes.json()
        setLeads([leadJson])
      }catch(e){
        console.error(e)
      }
    }
    getKey()
  },[])

  return (
    <div className="grid md:grid-cols-2 gap-6 relative z-10">
      <div className="p-6 rounded-lg bg-slate-900/50 border border-slate-700">
        <h4 className="font-semibold mb-2 text-white">Your API Key</h4>
        <pre className="bg-slate-800 p-3 rounded text-sm text-slate-300">{key || '—'}</pre>
        <p className="text-slate-400 text-sm mt-2">Use this key to call <code>/leads/generate</code></p>
      </div>
      <div className="p-6 rounded-lg bg-slate-900/50 border border-slate-700">
        <h4 className="font-semibold mb-2 text-white">Recent Leads</h4>
        <div className="text-sm text-slate-300">
          {leads.length===0 && <div className="text-slate-500">No leads yet in preview mode</div>}
          {leads.map((l,i)=>(
            <div key={i} className="p-3 border-b border-slate-700">
              <div className="flex justify-between"><div className="font-medium">{l.project_id}</div><div className="text-slate-300">${l.suggested_bid}</div></div>
              <div className="text-slate-400 text-sm mt-1">{l.api_key_label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}