"use client"

import gsap from "gsap"
import { useEffect } from "react"
import { LogoIcon } from "./icons/logo"

export default function HeroSection() {
  useEffect(() => {
    const titles = document.querySelectorAll(".main-hero h1")
    const tl = gsap.timeline({ defaults: { duration: 1 } })

    titles.forEach((title, index) => {
      const el = title.querySelectorAll("span span")
      const delay = index * 0.12

      gsap.set(el, { rotate: 5 })
      tl.to(
        el,
        {
          y: 0,
          rotate: 0,
          duration: 1.5,
          ease: "power2",
          stagger: 0.1,
        },
        delay,
      )
    })

    return () => {}
  }, [])

  return (
    <>
      <section className="main-hero flex h-screen items-center justify-center">
        <div className="container text-center">
          <h1 className="flex flex-wrap justify-center gap-4 text-[6rem] font-thin">
            <span className="inline-block overflow-hidden">
              <span className="inline-block translate-y-full will-change-transform">
                This
              </span>
            </span>
            <span className="inline-block overflow-hidden">
              <span className="inline-block translate-y-full will-change-transform">
                world
              </span>
            </span>
            <span className="inline-block overflow-hidden">
              <span className="inline-block translate-y-full will-change-transform">
                is
              </span>
            </span>
            <span className="inline-block overflow-hidden">
              <span className="inline-block translate-y-full will-change-transform">
                beautiful.
              </span>
            </span>
          </h1>
          <h1 className="flex flex-wrap justify-center gap-4 text-[6rem] font-thin">
            <span className="inline-block overflow-hidden">
              <span className="inline-block translate-y-full will-change-transform">
                With
              </span>
            </span>
            <span className="inline-block overflow-hidden">
              <span className="inline-block translate-y-full will-change-transform">
                YOU
              </span>
            </span>
            <span className="inline-block overflow-hidden">
              <span className="inline-block translate-y-full will-change-transform">
                !
              </span>
            </span>
          </h1>
        </div>
      </section>
    </>
  )
}
