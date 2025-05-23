'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Sidebar desktop */}
      <aside className="hidden sm:flex flex-col w-64 h-screen bg-white shadow-md pt-20 fixed left-0 top-0 z-10">
        <div className="px-6 flex flex-col justify-between h-full">
          <div>
            <h1 className="text-2xl font-bold text-blue-600 mb-8 flex items-center">
              <span className="bg-blue-500 p-2 rounded-full mr-2"></span>
              Hiphonic
            </h1>

            <div className="mb-8">
              <h2 className="text-sm font-semibold text-gray-500 mb-4">MENU</h2>
              <nav className="flex flex-col space-y-4 text-gray-700">
                <Link href="/" className="flex items-center space-x-3 font-medium text-blue-600 bg-blue-100 p-2 rounded-lg">
                  <span>Inicio</span>
                </Link>
                <Link href="/mytasks" className="flex items-center space-x-3 hover:text-blue-600">
                  <span>Productos</span>
                </Link>
                <Link href="/message" className="flex items-center space-x-3 hover:text-blue-600">
                  <span>Sobre Nosotros</span>
                </Link>
                <Link href="/goals" className="flex items-center space-x-3 hover:text-blue-600">
                  <span>Goals</span>
                </Link>
              </nav>
            </div>

            {/*<div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-gray-500">PROJECTS</h2>
                <button className="text-lg text-gray-500 hover:text-blue-600">+</button>
              </div>
              <div className="flex flex-col space-y-4 text-gray-700">
                <Link href="/projects/website-design" className="flex items-center space-x-3 hover:text-blue-600">
                  <span className="text-purple-500 text-xs">●</span>
                  <span>Website Design</span>
                </Link>
                <Link href="/projects/seo-analytics" className="flex items-center space-x-3 hover:text-blue-600">
                  <span className="text-yellow-400 text-xs">●</span>
                  <span>SEO Analytics</span>
                </Link>
                <Link href="/projects/hiphonic-app" className="flex items-center space-x-3 hover:text-blue-600">
                  <span className="text-green-500 text-xs">●</span>
                  <span>Hiphonic App</span>
                </Link>
              </div>
            </div>*/}
          </div>
        </div>
      </aside>
    </>
  )
}
