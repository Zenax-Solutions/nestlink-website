import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const startTime = useRef(Date.now())
  const DURATION = 2000

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime.current
      const pct = Math.min(Math.round((elapsed / DURATION) * 100), 100)
      setProgress(pct)
      if (pct >= 100) {
        clearInterval(timer)
        setTimeout(() => setDone(true), 500)
      }
    }, 30)
    return () => {
      clearInterval(timer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <motion.div
      initial={false}
      animate={done ? { clipPath: 'inset(0 0 100% 0)' } : { clipPath: 'inset(0)' }}
      onAnimationComplete={() => done && onFinish()}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#0000FF]"
    >
      <div className="flex flex-col items-center gap-2.5">
        <svg width="52" height="52" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L4 9V23L16 30L28 23V9L16 2Z" stroke="white" strokeWidth="2" fill="none" />
          <path d="M16 10L10 14V22L16 26L22 22V14L16 10Z" fill="white" />
        </svg>
        <span className="font-sans text-lg font-bold tracking-tight text-white">NestLink</span>
      </div>

      <div className="relative mt-10 h-1 w-48 overflow-hidden rounded-full bg-white/20">
        <motion.div
          className="h-full rounded-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <span className="mt-4 font-sans text-sm font-medium text-white/80">
        {progress}%
      </span>
    </motion.div>
  )
}
