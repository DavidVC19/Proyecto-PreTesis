'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const linkClass = (path: string) =>
    `flex items-center space-x-3 p-3 rounded-lg transition-colors duration-300 ${
      pathname === path
        ? 'bg-blue-600 text-white font-semibold shadow-md'
        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
    }`

  return (
    <>
      {/* Sidebar desktop */}
      <aside className="hidden sm:flex flex-col w-64 h-screen bg-white border-r border-gray-200 pt-20 fixed left-0 top-0 z-10">
        <div className="px-4 flex flex-col justify-between h-full">
          <div>
            <div className="mb-10 flex items-center justify-center">
              <Image
                src="/images/zeta-gas.png"
                alt="Zeta Gas Logo"
                width={160}
                height={60}
                className="object-contain"
              />
            </div>

            <div className="mb-8 px-2">
              <nav className="flex flex-col space-y-2">
                <Link href="/" className={linkClass('/')}>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    Inicio
                  </span>
                </Link>
                <Link href="/Productos" className={linkClass('/Productos')}>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                    </svg>
                    Productos
                  </span>
                </Link>
                <Link href="/SobreNosotros" className={linkClass('/SobreNosotros')}>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    Sobre Nosotros
                  </span>
                </Link>
                <Link href="/Ubicanos" className={linkClass('/Ubicanos')}>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    Ubícanos
                  </span>
                </Link>
              </nav>
            </div>
          </div>

          {/* Footer del sidebar */}
          <div className="pb-6 px-2">
            <div className="p-3 bg-blue-50 rounded-lg text-center text-blue-700 text-sm">
              <p>Z gas Valle Jequetepeque</p>
              <p className="text-xs text-gray-500 mt-1">© {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}