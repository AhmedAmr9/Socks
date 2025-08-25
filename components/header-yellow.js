// 'use client'
// import { useState } from 'react'
// import Link from 'next/link'
// import Image from "next/image"
// import { Menu, X, Instagram } from 'lucide-react'

// export default function HeaderYellow() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const navItems = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Menu', href: '#menu' },
//     { name: 'Team', href: '#team' },
//     { name: 'Contact', href: '#contact' },
//   ]

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     } else if (sectionId === "home") {
//       window.location.href = "/"
//     }
//     setIsMenuOpen(false)
//   }

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-yellow-300/95 shadow-lg backdrop-blur-md">
//       <div className="mx-auto px-10">
//         <div className="flex items-center justify-between h-20">

//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-4">
//             <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600">
//               <Image src="/main6.png" alt="Socks Logo" width={24} height={24} className="w-10 h-10"/>
//             </div>
//             <span className="text-sm md:text-lg font-semibold text-gray-800">
//               Socks Specialty Coffee
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => scrollToSection(item.href.slice(1))}
//                 className="font-medium text-gray-800 hover:text-amber-600 transition-colors duration-300"
//               >
//                 {item.name}
//               </button>
//             ))}
//           </nav>

//            {/* Social Links */}
//           <div className="hidden md:flex items-center space-x-4">
//             <a href="https://instagram.com/socks.coffee" target="_blank" rel="noopener noreferrer" >
// <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
//         <path
//             d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5s.9-.8 1.5-1c.4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.8.4 4 .7c-.9.3-1.6.7-2.3 1.4C1.1 2.8.7 3.5.4 4.4.1 5.2 0 6.1 0 7.4.1 8.7.1 9.1.1 12s0 3.3.1 4.6c.1 1.3.3 2.2.6 3 .3.9.7 1.6 1.4 2.3.7.7 1.4 1.1 2.3 1.4.8.3 1.7.5 3 .6 1.3.1 1.7.1 4.6.1s3.3 0 4.6-.1c1.3-.1 2.2-.3 3-.6.9-.3 1.6-.7 2.3-1.4.7-.7 1.1-1.4 1.4-2.3.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-4.6s0-3.3-.1-4.6c-.1-1.3-.3-2.2-.6-3-.3-.9-.7-1.6-1.4-2.3-.7-.7-1.4-1.1-2.3-1.4-.8-.3-1.7-.5-3-.6C15.3 0 14.9 0 12 0zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.3c-2.3 0-4.1-1.9-4.1-4.1 0-2.3 1.9-4.1 4.1-4.1s4.1 1.9 4.1 4.1c0 2.2-1.9 4.1-4.1 4.1zm6.4-11.8c0 .8-.6 1.5-1.5 1.5-.8 0-1.5-.6-1.5-1.5 0-.8.6-1.5 1.5-1.5.8 0 1.5.7 1.5 1.5z" />
//     </svg>
//       </a>
      
//             <a href="https://tiktok.com/@socks.coffee" target="_blank" rel="noopener noreferrer"
//               >
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
//                <path d="M12.001 2c1.084 0 2.16-.004 3.24.002.136 1.64.79 3.26 1.91 4.46 1.1 1.22 2.66 1.92 4.26 2.13v3.18c-1.48-.05-2.97-.44-4.28-1.21-.57-.33-1.09-.73-1.59-1.17-.01 2.57.01 5.14-.01 7.71-.05 1.37-.48 2.75-1.27 3.87-.86 1.25-2.16 2.2-3.6 2.63-1.46.46-3.09.4-4.52-.17-1.48-.59-2.73-1.75-3.44-3.19-.68-1.36-.86-2.96-.61-4.46.29-1.71 1.26-3.31 2.63-4.34 1.47-1.12 3.43-1.59 5.27-1.33.01 1.22-.02 2.44-.02 3.66-.82-.27-1.77-.2-2.54.25-.73.41-1.26 1.19-1.39 2.02-.16.91.15 1.89.84 2.52.67.64 1.71.87 2.62.61.84-.24 1.55-.92 1.81-1.77.1-.33.12-.68.13-1.02.01-4.03 0-8.07.01-12.1z" />
//               </svg>
//             </a>
//              <a href="https://www.facebook.com/share/1C8eKnBBaT/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
//                    className="text-gray-600 hover:text-amber-600">

//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
//                     viewBox="0 0 320 512">
//                     <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 
//             52.24-50.06H293V6.26S259.5 0 225.36 0c-73.14 
//             0-121.09 44.38-121.09 124.72V195.3H22.89V288h81.38v224h100.2V288z" />
//                 </svg>
//             </a>
//           </div>


//           {/* Mobile Menu Button */}
// <button
//   onClick={() => setIsMenuOpen(!isMenuOpen)}
//   className="md:hidden text-gray-800 transition-colors duration-300"
// >
//   {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// </button>
// </div>

// {/* Overlay (blur background when menu is open) */}
// {isMenuOpen && (
//   <div
//     className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
//     onClick={() => setIsMenuOpen(false)} // close if clicking outside
//   />
// )}

// {/* Mobile Menu - Right Drawer */}
// <div
//   className={`fixed top-0 right-0 h-full w-64 bg-yellow-300 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
//     isMenuOpen ? "translate-x-0" : "translate-x-full"
//   }`}
// >
//   <div className="px-6 py-6 space-y-6 relative">
//     {/* Close Button */}
//     <button
//       onClick={() => setIsMenuOpen(false)}
//       className="absolute top-4 left-4 text-gray-700 hover:text-amber-600"
//     >
//       ✕
//     </button>

//     {/* Nav Items */}
//     {navItems.map((item) => (
//       <button
//         key={item.name}
//         onClick={() => {
//           scrollToSection(item.href.slice(1))
//           setIsMenuOpen(false)
//         }}
//         className="block w-full text-left py-2 text-gray-800 hover:text-amber-600 transition-colors"
//       >
//         {item.name}
//       </button>
//     ))}

//     {/* Social Links */}
//     <div className="flex space-x-4 pt-6 border-t border-gray-200">
//       <a
//         href="https://instagram.com/socks.coffee"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-gray-600 hover:text-amber-600"
//       >
//         <Instagram className="w-5 h-5" />
//       </a>
//       <a
//         href="https://tiktok.com/@socks.coffee"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-gray-600 hover:text-amber-600"
//       >
//         {/* TikTok SVG */}
//         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12.001 2c1.084 0 2.16-.004 3.24.002.136 1.64.79 3.26 1.91 4.46 1.1 1.22 2.66 1.92 4.26 2.13v3.18c-1.48-.05-2.97-.44-4.28-1.21-.57-.33-1.09-.73-1.59-1.17-.01 2.57.01 5.14-.01 7.71-.05 1.37-.48 2.75-1.27 3.87-.86 1.25-2.16 2.2-3.6 2.63-1.46.46-3.09.4-4.52-.17-1.48-.59-2.73-1.75-3.44-3.19-.68-1.36-.86-2.96-.61-4.46.29-1.71 1.26-3.31 2.63-4.34 1.47-1.12 3.43-1.59 5.27-1.33.01 1.22-.02 2.44-.02 3.66-.82-.27-1.77-.2-2.54.25-.73.41-1.26 1.19-1.39 2.02-.16.91.15 1.89.84 2.52.67.64 1.71.87 2.62.61.84-.24 1.55-.92 1.81-1.77.1-.33.12-.68.13-1.02.01-4.03 0-8.07.01-12.1z" />
//         </svg>
//       </a>
//       <a
//         href="https://www.facebook.com/share/1C8eKnBBaT/?mibextid=wwXIfr"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-gray-600 hover:text-amber-600"
//       >
//         {/* Facebook SVG */}
//         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
//           viewBox="0 0 320 512">
//           <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 
//           52.24-50.06H293V6.26S259.5 0 225.36 0c-73.14 
//           0-121.09 44.38-121.09 124.72V195.3H22.89V288h81.38v224h100.2V288z" />
//         </svg>
//       </a>
//     </div>
//   </div>
// </div>

        
//       </div>
//     </header>
//   )
// }



'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from "next/image"
import { Menu, X, Instagram } from 'lucide-react'

export default function HeaderYellow() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    } else if (sectionId === "home") {
      window.location.href = "/"
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Navbar - always yellow */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-yellow-300 shadow-md">
        <div className="mx-auto px-10">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600">
                <Image src="/main6.png" alt="Socks Logo" width={24} height={24} className="w-10 h-10"/>
              </div>
              <span className="text-sm md:text-lg font-semibold text-gray-800">
                Socks Specialty Coffee
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className="font-medium text-gray-800 hover:text-amber-600 transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Social Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://instagram.com/socks.coffee" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-gray-700 hover:text-amber-600" />
              </a>
              <a href="https://tiktok.com/@socks.coffee" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-gray-700 hover:text-amber-600">
                  <path d="M12.001 2c1.084 0 2.16...z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1C8eKnBBaT/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 320 512" className="text-gray-700 hover:text-amber-600">
                  <path d="M279.14 288l14.22-92.66...z" />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-800"
            >
              {isMenuOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay (click to close) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Side Drawer - always under navbar */}
      <div
        className={`text-sm fixed top-20 right-0 w-64 h-[calc(100%-5rem)] bg-yellow-300 shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 space-y-6 relative">
          {/* Nav Items */}
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href.slice(1))}
              className="block w-full text-left py-2 text-gray-700 hover:text-amber-600 transition-colors"
            >
              {item.name}
            </button>
          ))}

                  {/* Social Links */}
          <div className="flex space-x-4 pt-6 border-t border-gray-200">
            <a href="https://instagram.com/socks.coffee" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-600">
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
