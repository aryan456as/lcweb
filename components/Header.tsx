'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'Our Doctor', 'About', 'Book Appointment', 'Blog', 'Contact']

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-50 shadow-md' : 'bg-gray-50'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-x-4">
        <Link href="/" className="flex items-center max-w-[150px] md:max-w-[200px]">
          <Image
            src="/logo.png"
            alt="LiverCure Logo"
            width={200}
            height={60}
            className="h-auto w-full"
          />
        </Link>
        <nav className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="text-[#800000]/70 hover:text-[#FFA500] transition-colors font-semibold"
            >
              {item}
            </Link>
          ))}
        </nav>
        <button
          className="lg:hidden text-[#800000] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.nav
          className="fixed top-0 left-0 w-full h-screen bg-[#800000] text-white flex flex-col items-center justify-center space-y-6 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 bg-white text-[#800000] rounded-full shadow-md hover:bg-[#FFA500] hover:text-white transition-all"
            onClick={() => setIsOpen(false)}
          >
            <FiX size={24} />
          </button>

          {/* Navigation Items */}
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="text-2xl font-semibold hover:text-[#FFA500] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </motion.nav>
      )}
    </motion.header>
  )
}

export default Header
