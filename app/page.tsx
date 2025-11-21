"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { WhyUs } from "@/components/sections/why-us"
import { Dates } from "@/components/sections/dates"
import { InHouse } from "@/components/sections/in-house"
import { FAQ } from "@/components/sections/faq"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { useEffect, useState } from "react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Dates />
        <InHouse />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
