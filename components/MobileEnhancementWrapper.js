'use client'
import { useEffect } from 'react'
import { enhanceMobileExperience } from '../utils/mobile-enhancements'

export default function MobileEnhancementWrapper({ children }) {
  useEffect(() => {
    // Apply mobile enhancements after component mounts
    const timer = setTimeout(() => {
      try {
        enhanceMobileExperience()
      } catch (error) {
        console.warn('Mobile enhancements could not be applied:', error)
      }
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return <>{children}</>
}
