'use client'
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Hero() {
  const slides = [
    "/Main.mp4",
    "/Main2.mp4",
    "/Main3.mp4",
    // "/Main4.mp4",
    "/Main5.mp4", // video slides
    "/Main6.PNG", // video slides
  ]

  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(true)
  const [btnAnimate, setBtnAnimate] = useState(false)

  const goToSlide = (index) => {
    setFade(false)
    setTimeout(() => {
      setCurrent(index)
      setFade(true)
      setBtnAnimate(true)
      setTimeout(() => setBtnAnimate(false), 800)
    }, 500)
  }

  const nextSlide = () => goToSlide((current + 1) % slides.length)
  const prevSlide = () => goToSlide((current - 1 + slides.length) % slides.length)

  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu")
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const isVideo = slides[current].toLowerCase().endsWith(".mp4")

  return (
    <section
      className={`relative h-[500px] md:h-[650px] flex items-center justify-center overflow-hidden ${
        isVideo ? "bg-[#FFF8E1]" : "bg-black"
      }`}
    >
      {/* Background Layer (blurred) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {isVideo ? (
          <video
            src={slides[current]}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover blur-lg scale-110"
          />
        ) : (
          <div
            className="w-full h-full blur-lg scale-110"
            style={{
              backgroundImage: `url('${slides[current]}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        )}
      </div>

      {/* Foreground Slide (clean video or image) */}
      <div className="relative z-10 flex items-center justify-center max-h-full max-w-full">
        {isVideo ? (
          <video
            src={slides[current]}
            autoPlay
            muted
            loop
            playsInline
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <img
            src={slides[current]}
            alt="Slide"
            width={1920} 
            height={1080} 
            className="max-h-full max-w-full object-contain"
          />
        )}
      </div>

      {/* Text + Button (only on images if you want cleaner video look) */}
      {!isVideo && (
        // <div className="absolute z-20 text-center text-white px-4">
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-20">
          {/* <h1 className="text-4xl md:text-6xl font-bold mb-4 font-pacifico">
            Welcome to Socks Specialty Coffee
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Brewing happiness, one cup at a time ☕
          </p> */}
          <button
            onClick={scrollToMenu}
            // className="bg-blue-600 text-white px-4 py-2 rounded-full animate-bounce-once">
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full animate-bounce-loop">
            See Our Menu
          </button>
        </div>
      )}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-yellow-500 hover:bg-yellow-300 p-3 rounded-full text-white shadow-lg"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-yellow-500 hover:bg-yellow-300 p-3 rounded-full text-white shadow-lg"
      >
        <ChevronRight size={28} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-yellow-400 scale-125"
                : "bg-gray-200 hover:bg-yellow-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  )
}
