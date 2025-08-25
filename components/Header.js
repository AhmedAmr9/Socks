'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="bg-[#FFF8E1] shadow-md sticky top-0 z-50">
        <div className="max-w-8xl pl-10 mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/logo.PNG" alt="Socks Logo" width={100} height={100} />
            <Image src="/logo2.png" alt="Socks Logo" width={100} height={100} className='ml-3'/>

            {/* <span className="text-lg font-pacifico text-[#5D4037] font-semibold pt-2 pl-5">
              Socks Specialty Coffee
            </span> */}
          </div>

          {/* Center: Nav Links */}
          <nav className="hidden md:flex items-center justify-center space-x-8 absolute left-1/2 transform -translate-x-1/2 text-sm-lg font-roboto text-[#5D4037]">
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>

            <Link href="#contact" className="hover:text-yellow-400">
              Contact
            </Link>

            {/* About Us opens modal */}
            <button
              onClick={() => setOpen(true)}
              className="hover:text-yellow-400 focus:outline-none"
            >
              About Us
            </button>
          </nav>
        </div>
      </header>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-3xl w-full">
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-5 text-white-600 focus:outline-none text-sm font-bold cursor-pointer z-50 bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center shadow-md"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-[#5D4037] mb-6 text-center">
              About Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image
                src="/about1.jpg" // replace with your first image
                alt="About Socks 1"
                width={500}
                height={400}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="/about2.jpg" // replace with your second image
                alt="About Socks 2"
                width={500}
                height={400}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
