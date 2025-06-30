"use client"

import { useState } from "react"
import Link from "next/link"

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div>
      <header style={{ backgroundColor: "#182c54" }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 border-b">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <img src="./logo.svg" width={50} height={75} alt="Logo" />
              <span className="sr-only">Home</span>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              {/* Desktop Navigation */}
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link className="text-white transition hover:text-blue-500/75" href="#">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white transition hover:text-blue-500/75" href="/upload">
                      Upload
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white transition hover:text-blue-500/75" href="#">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Desktop Auth Buttons */}
              <div className="hidden md:flex items-center gap-4">
                <div className="flex gap-4">
                  <Link
                    className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-700 transition"
                    href="/sign-in"
                  >
                    Login
                  </Link>
                  <Link
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600 hover:bg-gray-200 transition"
                    href="/sign-up"
                  >
                    Register
                  </Link>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-600 mt-2">
              <nav className="px-2 pt-2 pb-4">
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="block px-3 py-2 text-white hover:text-blue-500/75 transition"
                      href="#"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-3 py-2 text-white hover:text-blue-500/75 transition"
                      href="/upload"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Upload
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-3 py-2 text-white hover:text-blue-500/75 transition"
                      href="#"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>

                {/* Mobile Auth Buttons */}
                <div className="mt-4 space-y-2">
                  <Link
                    className="block w-full rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white text-center shadow hover:bg-blue-700 transition"
                    href="/sign-in"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    className="block w-full rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600 text-center hover:bg-gray-200 transition"
                    href="/sign-up"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default Header
