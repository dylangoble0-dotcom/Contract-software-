import React from 'react'

export default function Hero(){
  return (
    <section className="relative z-10 grid lg:grid-cols-2 gap-8 items-center py-20">
      <div>
        <h1 className="text-5xl font-extrabold leading-tight mb-4">Find high-quality contract leads & win more bids</h1>
        <p className="text-slate-300 mb-6 max-w-xl">ContractLeadGen discovers bidding opportunities and delivers matched leads with AI-powered suggested bids — integrate via API or use our dashboard to manage keys and leads.</p>
        <div className="flex gap-3">
          <a href="#get" className="px-6 py-3 rounded-md bg-primary text-black font-semibold shadow">Get API Key</a>
          <a href="#pricing" className="px-6 py-3 rounded-md border border-slate-700 text-slate-200">See Pricing</a>
        </div>
      </div>
      <div className="rounded-xl shadow-xl overflow-hidden bg-gradient-to-b from-slate-900/60 to-slate-800/40 p-6">
        <h3 className="text-lg font-semibold mb-2 text-white">Example lead</h3>
        <p className="text-slate-400 mb-4">Roof replacement — 2000 sq ft</p>
        <div className="p-4 rounded-md border border-slate-700 bg-slate-900/40">
          <div className="flex justify-between"><span className="text-sm text-slate-300">Suggested bid</span><strong className="text-white">$5,200</strong></div>
          <div className="mt-3 text-xs text-slate-500">Delivered via API in JSON, CSV, or webhook</div>
        </div>
      </div>
    </section>
  )
}