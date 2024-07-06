import Link from "next/link"
import { MenuBtn } from "../menu-btn"
import { Logo } from "./logo"

export const Header = () => {
  return (
    <>
      <header className="min-w-screen fixed left-0 top-0 z-10 w-screen transition-all duration-500 ease-out">
        <div className="container flex items-center justify-between p-6">
          <Logo />
          <nav className="flex max-h-6 gap-4 text-sm font-light">
            <MenuBtn>Home</MenuBtn>
            <MenuBtn>Products</MenuBtn>
            <MenuBtn>ContactUs</MenuBtn>
          </nav>
        </div>
      </header>
    </>
  )
}
