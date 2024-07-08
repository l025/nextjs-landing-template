"use client"

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useLayoutEffect,
  useRef,
} from "react"
import debounce from "@/util/debounce"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const PageContext = createContext({
  lenis: null,
})

export const PageProvider = ({ children }) => {
  const [lenis, setLenis] = useState()
  const reqIdRef = useRef()

  useEffect(() => {
    const animate = (time) => {
      lenis?.raf(time)
      reqIdRef.current = requestAnimationFrame(animate)
    }
    reqIdRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(reqIdRef.current)
  }, [lenis])

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    gsap.registerPlugin(ScrollTrigger)

    // top nav
    gsap.to(".top-nav", {
      marginTop: 0,
      alpha: 1,
      duration: 0.5,
    })
    const showtopNav = gsap
      .from(".top-nav", {
        yPercent: -100,
        paused: true,
        duration: 0.5,
        ease: "power2.out",
      })
      .progress(1)

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showtopNav.play() : showtopNav.reverse()
      },
    })

    setLenis(lenis)

    return () => {
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  const memoedValue = useMemo(
    () => ({
      lenis,
    }),
    [],
  )

  return (
    <PageContext.Provider value={memoedValue}>{children}</PageContext.Provider>
  )
}
export default function usePage() {
  return useContext(PageContext)
}
