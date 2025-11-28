import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import AnimatedBackground from './components/AnimatedBackground'

export default function App(){
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground color="#004830" />
      <header className="fixed top-4 left-0 right-0 z-30">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between header-blur rounded-lg py-3">
          <div className="flex items-center gap-3">
            <div style={{width:44,height:44,background:"#004830"}} className="rounded-md shadow-lg"></div>
            <div className="text-white font-semibold text-lg">ContractLeadGen</div>
          </div>
          <nav className="hidden md:flex gap-4 items-center text-sm text-slate-200">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#dashboard" className="hover:underline">Dashboard</a>
            <a href="#get" className="px-3 py-2 bg-white bg-opacity-8 rounded-md">Get API Key</a>
          </nav>
        </div>
      </header>

      <main className="pt-28">
        <div className="max-w-6xl mx-auto px-6">
          <Hero />
          <Features />
          <section id="dashboard" className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Dashboard preview</h2>
            <Dashboard />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}