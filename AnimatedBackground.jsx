import React, {useRef, useEffect} from 'react'

export default function AnimatedBackground({color='#004830'}){
  const ref = useRef(null)

  useEffect(()=>{
    const canvas = ref.current
    if(!canvas) return
    const ctx = canvas.getContext('2d')
    let width = 0, height = 0, raf = null, t0 = 0
    const DPR = window.devicePixelRatio || 1

    function resize(){
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.max(300, Math.floor(width * DPR))
      canvas.height = Math.max(200, Math.floor(height * DPR))
    }

    function hexToRgba(hex, a){
      const h = hex.replace('#','')
      const bigint = parseInt(h,16)
      const r = (bigint >> 16) & 255
      const g = (bigint >> 8) & 255
      const b = bigint & 255
      return `rgba(${r}, ${g}, ${b}, ${a})`
    }

    function draw(time){
      if(!width || !height) resize()
      const t = (time - t0)/1000
      ctx.clearRect(0,0,canvas.width,canvas.height)
      ctx.save()
      ctx.scale(DPR, DPR)

      // soft vignette
      const grad = ctx.createLinearGradient(0,0,width, height)
      grad.addColorStop(0, 'rgba(0,0,0,0.0)')
      grad.addColorStop(1, 'rgba(0,0,0,0.35)')
      ctx.fillStyle = grad
      ctx.fillRect(0,0,width, height)

      // waves
      const waves = 5
      for(let i=0;i<waves;i++){
        ctx.beginPath()
        const amp = 24 + i*8
        const freq = 0.006 + i*0.002
        const speed = 0.6 + i*0.15
        for(let x=0;x<width;x+=2){
          const y = height*0.5 + Math.sin((x*freq) + (t*speed) + i) * amp * (1 + 0.2*Math.sin(t+i))
          if(x===0) ctx.moveTo(x,y)
          else ctx.lineTo(x,y)
        }
        ctx.strokeStyle = hexToRgba(color, 0.06 + i*0.02)
        ctx.lineWidth = 1.5 + i*0.6
        ctx.stroke()
      }

      // particles
      const count = 80
      for(let i=0;i<count;i++){
        const px = (i/count) * width + Math.sin(t + i) * 20
        const py = height*0.5 + Math.cos(t*0.6 + i) * (30 + 10*Math.sin(i))
        const s = 0.6 + (Math.sin(t+i)+1)*0.6
        ctx.fillStyle = hexToRgba(color, 0.09)
        ctx.beginPath()
        ctx.arc(px, py, s, 0, Math.PI*2)
        ctx.fill()
      }

      ctx.restore()
      raf = requestAnimationFrame(draw)
    }

    function onResize(){ resize() }

    window.addEventListener('resize', onResize)
    resize()
    raf = requestAnimationFrame((t)=>{ t0 = t; draw(t) })

    return ()=>{
      window.removeEventListener('resize', onResize)
      if(raf) cancelAnimationFrame(raf)
    }
  },[ref])

  return <canvas ref={ref} style={{position:'fixed', inset:0, zIndex:0, width:'100%', height:'100%'}} aria-hidden />
}