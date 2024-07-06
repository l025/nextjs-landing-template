"use client"

import Link from "next/link"
import { LogoIcon } from "../icons/logo"
import { useRef } from "react"
import gsap from "gsap"

export const Logo = () => {
  const logoRef = useRef(null)

  const colors = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"]
  let colorIndex = 0
  let changingColor = null

  const onLogoEnter = () => {
    if (changingColor !== null) return

    changingColor = setInterval(() => {
      if (colors[++colorIndex] === undefined) colorIndex = 0
      gsap.to(logoRef.current, {
        color: colors[colorIndex],
        duration: 0.2,
        ease: "sine",
      })
    }, 300)
  }
  const onLogoLeave = () => {
    clearInterval(changingColor)
    changingColor = null

    gsap.to(logoRef.current, {
      color: "#282829",
      duration: 0.2,
      ease: "power1.inOut",
    })
  }

  return (
    <Link
      href={"#"}
      className="pointer-event-auto transition-height inline-block cursor-pointer bg-white [&>svg]:max-h-10 [&>svg]:duration-500 [&>svg]:ease-out lg:[&>svg]:max-h-16"
      data-default-color="#212121"
      ref={logoRef}
      onMouseEnter={onLogoEnter}
      onMouseLeave={onLogoLeave}
    >
      <LogoIcon />
    </Link>
  )
}
