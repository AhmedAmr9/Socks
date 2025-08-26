'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from "next/image"
import { Menu, X, Instagram } from 'lucide-react'

export default function HeaderProfessional() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-yellow-300/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="mx-auto px-10">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4">
              <Image 
                src="/Logo.png" 
                alt="Socks Logo" 
                width={40} 
                height={40} 
                priority
                className="w-10 h-10"
              />
              <span
                className={`text-sm md:text-lg font-semibold ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Socks Specialty Coffee
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-300'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Instagram */}
              <a href="https://www.instagram.com/socks__coffee" target="_blank" rel="noopener noreferrer" 
                 className={`transition-colors duration-300 ${
                   isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-300'
                 }`}>
                <Instagram className="w-5 h-5" />
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com/@socks.coffee" target="_blank" rel="noopener noreferrer"
                 className={`transition-colors duration-300 ${
                   isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-300'
                 }`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.001 2c1.084 0 2.16-.004 3.24.002.136 1.64.79 3.26 1.91 4.46 1.1 1.22 2.66 1.92 4.26 2.13v3.18c-1.48-.05-2.97-.44-4.28-1.21-.57-.33-1.09-.73-1.59-1.17-.01 2.57.01 5.14-.01 7.71-.05 1.37-.48 2.75-1.27 3.87-.86 1.25-2.16 2.2-3.6 2.63-1.46.46-3.09.4-4.52-.17-1.48-.59-2.73-1.75-3.44-3.19-.68-1.36-.86-2.96-.61-4.46.29-1.71 1.26-3.31 2.63-4.34 1.47-1.12 3.43-1.59 5.27-1.33.01 1.22-.02 2.44-.02 3.66-.82-.27-1.77-.2-2.54.25-.73.41-1.26 1.19-1.39 2.02-.16.91.15 1.89.84 2.52.67.64 1.71.87 2.62.61.84-.24 1.55-.92 1.81-1.77.1-.33.12-.68.13-1.02.01-4.03 0-8.07.01-12.1z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/share/1C8eKnBBaT/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                 className={`transition-colors duration-300 ${
                   isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-300'
                 }`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                  viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 
                  52.24-50.06H293V6.26S259.5 0 225.36 0c-73.14 
                  0-121.09 44.38-121.09 124.72V195.3H22.89V288h81.38v224h100.2V288z" />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={` md:hidden transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Side Drawer */}
      <div
        className={`text-sm fixed right-0 w-64 bg-yellow-300 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${isScrolled ? "top-20 h-[calc(100%-5rem)]" : "top-0 h-full"}`}
      >
        <div className="p-6 space-y-6 relative">
          {/* Close Button - Only show when scrolled */}
          {!isScrolled && (
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold absolute top-4 right-8 text-gray-700 hover:text-amber-600"
            >
              ✕
            </button>
          )}

          {/* Navigation Items */}
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href.slice(1))}
              className="block w-full text-left py-2 text-sm text-gray-700 hover:text-amber-600 transition-colors">
        
              {item.name}
            </button>
          ))}

          {/* Social Links */}
          <div className="flex space-x-4 pt-6 border-t border-gray-200">
            <a href="https://www.instagram.com/socks__coffee" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-600">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://tiktok.com/@socks.coffee" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.001 2c1.084 0 2.16-.004 3.24.002.136 1.64.79 3.26 1.91 4.46 1.1 1.22 2.66 1.92 4.26 2.13v3.18c-1.48-.05-2.97-.44-4.28-1.21-.57-.33-1.09-.73-1.59-1.17-.01 2.57.01 5.14-.01 7.71-.05 1.37-.48 2.75-1.27 3.87-.86 1.25-2.16 2.2-3.6 2.63-1.46.46-3.09.4-4.52-.17-1.48-.59-2.73-1.75-3.44-3.19-.68-1.36-.86-2.96-.61-4.46.29-1.71 1.26-3.31 2.63-4.34 1.47-1.12 3.43-1.59 5.27-1.33.01 1.22-.02 2.44-.02 3.66-.82-.27-1.77-.2-2.54.25-.73.41-1.26 1.19-1.39 2.02-.16.91.15 1.89.84 2.52.67.64 1.71.87 2.62.61.84-.24 1.55-.92 1.81-1.77.1-.33.12-.68.13-1.02.01-4.03 0-8.07.01-12.1z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/share/1C8eKnBBaT/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 
                52.24-50.06H293V6.26S259.5 0 225.36 0c-73.14 
                0-121.09 44.38-121.09 124.72V195.3H22.89V288h81.38v224h100.2V288z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
