'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const linkClass = (path: string) =>
    `flex items-center space-x-3 p-2 rounded-lg ${
      pathname === path
        ? 'bg-blue-100 text-blue-600 font-semibold'
        : 'hover:text-blue-600'
    }`

  return (
    <>
      {/* Sidebar desktop */}
      <aside className="hidden sm:flex flex-col w-64 h-screen bg-white shadow-md pt-20 fixed left-0 top-0 z-10">
        <div className="px-6 flex flex-col justify-between h-full">
          <div>
            <div className="mb-8 flex items-center justify-center">
              <Image
                src="/images/zeta-gas.png"
                alt="Zeta Gas Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>

            <div className="mb-8">
              <nav className="flex flex-col space-y-4 text-gray-700">
                <Link href="/" className={linkClass('/')}>
                  <span>Inicio</span>
                </Link>
                <Link href="/Productos" className={linkClass('/Productos')}>
                  <span>Productos</span>
                </Link>
                <Link href="/SobreNosotros" className={linkClass('/SobreNosotros')}>
                  <span>Sobre Nosotros</span>
                </Link>
                <Link href="/Ubicanos" className={linkClass('/Ubicanos')}>
                  <span>Ubícanos</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
