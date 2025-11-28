import React from 'react'
export default function Footer(){
  return (
    <footer className="relative z-10 mt-20 py-10 text-sm text-slate-400">
      <div className="max-w-6xl mx-auto px-6 text-center">
        © {{year}} ContractLeadGen — All rights reserved.
      </div>
    </footer>
  )
}