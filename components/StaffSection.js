"use client"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import staff from "../data/staff"

export default function StaffSection() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const touchStartX = useRef(0)
  const touchScrollLeft = useRef(0)

  const ITEM_SIZE = 178

  const updateScrollButtons = () => {
    if (!scrollRef.current) return
    const { scrollLeft: sl, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(sl > 0)
    setCanScrollRight(sl + clientWidth < scrollWidth - 5)
  }

  useEffect(() => {
    updateScrollButtons()
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollButtons)
    return () => el.removeEventListener('scroll', updateScrollButtons)
  }, [])

  const snapToNearest = () => {
    if (!scrollRef.current) return
    const { scrollLeft: sl } = scrollRef.current
    const nearest = Math.round(sl / ITEM_SIZE) * ITEM_SIZE
    scrollRef.current.scrollTo({ left: nearest, behavior: 'smooth' })
  }

  const scroll = (dir) => {
    if (!scrollRef.current) return
    const { scrollLeft: sl } = scrollRef.current
    const newScroll =
      dir === 'left'
        ? Math.round((sl - ITEM_SIZE) / ITEM_SIZE) * ITEM_SIZE
        : Math.round((sl + ITEM_SIZE) / ITEM_SIZE) * ITEM_SIZE
    scrollRef.current.scrollTo({
      left: newScroll,
      behavior: 'smooth',
    })
  }

  const handleMouseDown = (e) => {
    isDown.current = true
    startX.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
  }
  const handleMouseLeave = () => (isDown.current = false)
  const handleMouseUp = () => {
    isDown.current = false
    snapToNearest()
  }
  const handleMouseMove = (e) => {
    if (!isDown.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].pageX - scrollRef.current.offsetLeft
    touchScrollLeft.current = scrollRef.current.scrollLeft
  }
  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft
    const walk = (x - touchStartX.current) * 1.5
    scrollRef.current.scrollLeft = touchScrollLeft.current - walk
  }
  const handleTouchEnd = () => snapToNearest()

  return (
    <section id='team' className="py-10 bg-white text-center rounded shadow-md relative select-none">
      <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-10 font-merriweather">
        Meet Socks Team
      </h2>

      <div className="relative w-full flex items-center justify-center mb-10">
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-8 z-10 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-md transition-all duration-200 hover:scale-110 -translate-x-1/2"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-0 ms:gap-6 overflow-x-scroll no-scrollbar scroll-smooth cursor-grab px-10 md:px-0"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {staff.map((member) => (
            <Link key={member.id} href={`/staff/${member.id}`} className="group">
              <div className="flex flex-col items-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 p-4 rounded-2xl">
                <div className="relative">
                  <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden border-4 border-gray-400 shadow-md transition-all duration-300 group-hover:border-yellow-500 group-hover:shadow-xl">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-300">
                    <span className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Profile
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-[#5D4037] text-xs md:text-base font-semibold tracking-wide group-hover:text-yellow-500 transition-colors duration-200">
                  {member.name}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-8 z-10 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-md transition-all duration-200 hover:scale-110 translate-x-1/2"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        )}
      </div>

      <div className="max-w-3xl mx-auto mt-12 text-center px-6">
        <p className="text-sm md:text-xl text-gray-700 leading-relaxed mb-4">
          <span className="font-semibold text-yellow-500">Socks Team</span> are the heart and soul of this place.  
          They aren't just employees — they are artists who craft happiness,  
          painting a smile on your face before you even taste your coffee.
        </p>
        <p className="text-sm md:text-xl text-gray-700 leading-relaxed mb-4">
          Why <span className="font-semibold text-yellow-500">"Socks"</span>? Because we believe that being different is the secret to beauty,  
          just like a pair of colorful, mismatched socks that brighten up your day.
        </p>
        <p className="text-sm md:text-xl text-gray-700 leading-relaxed">
          We believe that everyone deserves a chance to show the world their own unique colors  
          and special talents. 🌟
        </p>
      </div>
    </section>
  )
}
