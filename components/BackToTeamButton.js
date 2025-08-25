'use client'
import { ChevronLeft } from 'lucide-react'

export default function BackToTeamButton() {
  const scrollToTeam = () => {
    const element = document.getElementById("team")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = "/#team"
    }
  }

  return (
    <button
      onClick={scrollToTeam}
      className="flex items-center space-x-2 text-yellow-500 font-semibold hover:text-yellow-600 transition-colors"
    >
      <ChevronLeft className="w-5 h-5" />
      <span>Back to Team</span>
    </button>
  )
}
