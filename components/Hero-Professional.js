'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronDown, Play, Coffee, Sparkles, ArrowDown } from 'lucide-react'

export default function HeroProfessional() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef(null)

  // Slides declared inside the component so it can be used safely in useEffect dependencies
  const slides = [
    {
      type: 'video',
      src: '/Main3.mp4',
      title: 'Premium Coffee Experience',
      subtitle: 'Crafted with passion, served with excellence'
    },
    {
      type: 'image',
      src: '/HeroSection/Main7.jpg',
      title: 'Socks Coffee',
      subtitle: 'Your daily dose of happiness'
    },
    {
      type: 'image',
      src: '/HeroSection/Main5.jpg',
      title: 'Artisan Coffee',
      subtitle: 'Where every cup tells a story'
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const current = slides[currentSlide]

    if (current.type === 'video' && videoRef.current) {
      const videoEl = videoRef.current
      videoEl.currentTime = 0
      videoEl.play().catch(() => {})

      const handleEnded = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }

      videoEl.addEventListener('ended', handleEnded)

      return () => {
        videoEl.removeEventListener('ended', handleEnded)
      }
    }

    // If it's an image → move on after 5s
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearTimeout(timer)
  }, [currentSlide, slides])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 via-orange-800/50 to-red-900/60 z-10" />

        {slides[currentSlide].type === 'video' ? (
          <video
            ref={videoRef}
            src={slides[currentSlide].src}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={slides[currentSlide].src}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left animate-bounce pl-20">
        <Coffee className="w-6 h-6 md:w-8 md:h-8 text-yellow-300 opacity-90" />
      </div>
      <div className="absolute top-28 md:top-32 right-20 animate-ping">
        <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-yellow-300 opacity-100" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Socks
              </span>
              <span className="bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
                {' '}Specialty{' '}
              </span>
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Coffee
              </span>
            </h1>

            <p className="text-sm md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('menu')}
                className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <span className="text-xs md:text-lg flex items-center gap-2">
                  Explore Menu
                  <ChevronDown className="w-3 h-3 group-hover:translate-y-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <span className="text-xs md:text-lg flex items-center gap-2">
                  <Play className="w-3 h-3 md:w-5 md:h-5" />
                  Watch Story
                </span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-400">50+</div>
              <div className="text-sm text-gray-300">Coffee Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-400">1000+</div>
              <div className="text-sm text-gray-300">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-400">5★</div>
              <div className="text-sm text-gray-300">Premium Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  )
}
