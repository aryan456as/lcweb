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

  const navItems = ['Home', 'Our Doctor', 'About', 'Blog', 'Contact', 'Book Appointment']

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
        <nav className="hidden lg:flex space-x-6 items-center">
          {navItems.map((item) => (
            item === 'Book Appointment' ? (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/book-appointment"
                  className="px-6 py-3 bg-[#800000]/80 hover:bg-[#FFA500] text-white rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  {item}
                </Link>
              </motion.div>
            ) : (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="text-[#800000]/70 hover:text-[#FFA500] transition-colors font-semibold"
              >
                {item}
              </Link>
            )
          ))}
        </nav>
        <div className="lg:hidden flex items-center">
          <button
            className="text-[#800000] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

       {/* Dropdown Menu */}
       {isOpen && (
        <motion.div
        className="fixed top-[50px] md:top-[60px] left-0 w-full h-[calc(100vh-50px)] md:h-[calc(100vh-60px)] bg-gray-50 z-40 flex items-center justify-center overflow-y-auto shadow-lg"
        initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto flex flex-col items-center space-y-6 transform -translate-y-12">
            {navItems.map((item) =>
              item === 'Book Appointment' ? (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/book-appointment"
                    className="block w-full max-w-xs px-6 py-3 bg-[#800000]/80  hover:bg-[#FFA500] text-white text-center rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ) : (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-lg font-semibold text-[#800000] hover:text-[#FFA500] text-center transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
