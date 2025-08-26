"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Footer() {
  const [status, setStatus] = useState(null)

  useEffect(() => {
    const subscribed = localStorage.getItem("subscribed")
    if (subscribed === "true") {
      setStatus(renderSuccessMessage())
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value

    const formData = new FormData()
    formData.append("entry.1289766423", email)

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSeefTEhVt73t2pGDg9xwcJ0tFhv9l2TPiE61MyKVNzTnjX0CA/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      )

      localStorage.setItem("subscribed", "true")
      setStatus(renderSuccessMessage())

      form.reset()
    } catch (error) {
      setStatus(
        <p className="text-sm md:text-base text-red-600 mt-2">
          ❌ Something went wrong. Please try again.
        </p>
      )
    }
  }

  const renderSuccessMessage = () => (
    <p
      className="text-xs md:text-xs newsletter-form__message newsletter-form__message--success form__message flex items-center gap-2 mt-3 text-gray-700 font-small"
      id="ContactFooter-success"
      tabIndex="-1"
      autoFocus
    >
      <svg
        aria-hidden="true"
        focusable="false"
        className="icon icon-success w-4 h-4"
        viewBox="0 0 13 13"
      >
        <path
          d="M6.5 12.35C9.73087 12.35 12.35 9.73086 12.35 6.5C12.35 3.26913 9.73087 0.65 6.5 0.65C3.26913 0.65 0.65 3.26913 0.65 6.5C0.65 9.73086 3.26913 12.35 6.5 12.35Z"
          fill="#428445"
          stroke="white"
          strokeWidth="0.7"
        />
        <path d="M5.53271 8.66357L9.25213 4.68197" stroke="white" />
        <path d="M4.10645 6.7688L6.13766 8.62553" stroke="white" />
      </svg>
      Thanks for subscribing
    </p>
  )

  return (
    <footer className="custom-footer">
      {/* Logo */}
      <div className="footer-logo mb-8">
       <Image
  src="/Logo.png"
  alt="Socks Coffee Logo"
  width={120}   // تقدر تتحكم في الحجم
  height={120}
  className="footer-logo-img"
/>

      </div>

      {/* Subscribe Section */}
      <div className="subscribe-section mt-4 flex flex-col items-center text-center mb-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-row sm:flex-row items-center gap-2 text-xs md:text-base"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="text-sm md:text-base px-6 py-2 rounded-lg border border-gray-500 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <button
            type="submit"
            className="text-xs md:text-base px-2.5 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 hover:text-white transition shadow-md shadow-yellow-600/50"
          >
            Subscribe
          </button>
        </form>

        {/* ✅ Success/Error Message Below Field */}
        {status}
      </div>
      
{/* Social Links */}
      <div className="social-links">

        <a href="https://www.instagram.com/socks__coffee" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path
            d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5s.9-.8 1.5-1c.4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.8.4 4 .7c-.9.3-1.6.7-2.3 1.4C1.1 2.8.7 3.5.4 4.4.1 5.2 0 6.1 0 7.4.1 8.7.1 9.1.1 12s0 3.3.1 4.6c.1 1.3.3 2.2.6 3 .3.9.7 1.6 1.4 2.3.7.7 1.4 1.1 2.3 1.4.8.3 1.7.5 3 .6 1.3.1 1.7.1 4.6.1s3.3 0 4.6-.1c1.3-.1 2.2-.3 3-.6.9-.3 1.6-.7 2.3-1.4.7-.7 1.1-1.4 1.4-2.3.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-4.6s0-3.3-.1-4.6c-.1-1.3-.3-2.2-.6-3-.3-.9-.7-1.6-1.4-2.3-.7-.7-1.4-1.1-2.3-1.4-.8-.3-1.7-.5-3-.6C15.3 0 14.9 0 12 0zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.3c-2.3 0-4.1-1.9-4.1-4.1 0-2.3 1.9-4.1 4.1-4.1s4.1 1.9 4.1 4.1c0 2.2-1.9 4.1-4.1 4.1zm6.4-11.8c0 .8-.6 1.5-1.5 1.5-.8 0-1.5-.6-1.5-1.5 0-.8.6-1.5 1.5-1.5.8 0 1.5.7 1.5 1.5z" />
    </svg>
        </a>

        <a href="https://www.tiktok.com/@socks.coffee?_t=ZS-8ywJ6yQriew&_r=1" aria-label="TikTok">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path
            d="M12.001 2c1.084 0 2.16-.004 3.24.002.136 1.64.79 3.26 1.91 4.46 1.1 1.22 2.66 1.92 4.26 2.13v3.18c-1.48-.05-2.97-.44-4.28-1.21-.57-.33-1.09-.73-1.59-1.17-.01 2.57.01 5.14-.01 7.71-.05 1.37-.48 2.75-1.27 3.87-.86 1.25-2.16 2.2-3.6 2.63-1.46.46-3.09.4-4.52-.17-1.48-.59-2.73-1.75-3.44-3.19-.68-1.36-.86-2.96-.61-4.46.29-1.71 1.26-3.31 2.63-4.34 1.47-1.12 3.43-1.59 5.27-1.33.01 1.22-.02 2.44-.02 3.66-.82-.27-1.77-.2-2.54.25-.73.41-1.26 1.19-1.39 2.02-.16.91.15 1.89.84 2.52.67.64 1.71.87 2.62.61.84-.24 1.55-.92 1.81-1.77.1-.33.12-.68.13-1.02.01-4.03 0-8.07.01-12.1z" />
    </svg>
        </a>

       <a href="https://www.facebook.com/share/1C8eKnBBaT/?mibextid=wwXIfr" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 
            52.24-50.06H293V6.26S259.5 0 225.36 0c-73.14 
            0-121.09 44.38-121.09 124.72V195.3H22.89V288h81.38v224h100.2V288z" />
    </svg>
        </a>

          {/* Twitter (X) */}

           {/* <a href="#" aria-label="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"viewBox="0 0 512 512">
           <path d="M459.37 151.716h-.046c.326 
            4.548.326 9.097.326 13.644 
            0 138.72-105.583 298.558-298.558 
            298.558-59.452 
            0-114.68-17.219-161.137-47.106 8.447.974 
            16.568 1.299 25.34 1.299 
            49.055 0 94.213-16.568 
            130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 
            6.498.974 12.995 1.624 19.818 
            1.624 9.421 0 18.843-1.299 
            27.614-3.573-48.081-9.747-84.143-51.98-84.143-103.001 
            0-.488 0-.975.326-1.463 
            14.294 7.911 30.754 
            12.67 48.426 13.319-28.264-18.843-46.781-51.005-46.781-87.391 
            0-19.492 5.197-37.36 
            14.62-52.954 53.34 
            65.3 133.306 108.258 223.334 112.834-1.624-7.792-2.599-15.909-2.599-24.027 
            0-57.828 46.782-104.934 
            104.934-104.934 30.232 
            0 57.502 12.67 76.67 33.137 
            23.715-4.548 46.132-13.319 
            66.599-25.34-7.792 
            24.366-24.366 44.833-46.132 
            57.827 21.117-2.273 41.584-8.122 
            60.426-16.243-14.292 20.791-32.161 
            39.308-52.628 54.253z" />
          </svg>
            </a> */}
      </div>


      {/* Copyright */}
      <div className="copyright">
        © 2025 - Socks Specialty Coffee. All rights reserved.
      </div>
    </footer>
  )
  
}
