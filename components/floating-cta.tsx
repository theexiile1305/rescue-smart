"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToBooking = () => {
    const element = document.querySelector("#termine")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      <Button onClick={scrollToBooking} size="lg" className="bg-accent hover:bg-accent/90 shadow-lg rounded-full px-6">
        Jetzt buchen
      </Button>
    </div>
  )
}
