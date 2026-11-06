import { useEffect, useRef } from 'react'
import * as css from './Cursor.css'

export function Cursor() {
  const cursor = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!cursor.current) return
    const canvas = cursor.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    let x = -50
    let y = -50
    const onMouseMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
    }

    let raf = 0

    ctx.fillStyle = `rgba(0, 0, 255, 1)`
    ctx.filter = ``
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath()
      ctx.fillRect(x, y, 10, 10)
      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)
    window.addEventListener('pointermove', onMouseMove)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMouseMove)
      window.removeEventListener('resize', resize)
    }
  }, [])
  return <canvas id="cursor" className={css.cursor} ref={cursor} />
}
