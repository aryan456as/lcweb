'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen mt-6 overflow-hidden bg-gray-50"> {/* Removed mt-20 to reduce the gap */}
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[200%] md:w-full aspect-square rounded-full bg-gradient-to-r from-[#FFA500]/10 to-[#800000]/30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-screen py-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-[#800000]/65 rounded-full text-white mb-4">
                <span className="mr-2">⭐</span>
                Trusted by 1,00,000+ Patients
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#800000] leading-tight"> {/* Changed text color to match header */}
                Your Liver Health, <br />
                <span className="text-[#FFA500] block mt-2">Our Priority</span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#800000]/80 max-w-xl mx-auto lg:mx-0">
                Experience comprehensive liver treatment with our specialized homeopathic approach. Start your journey to better health today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/book-appointment">
                  <motion.button
                    className="px-8 py-4 bg-[#800000] text-white rounded-full text-lg font-semibold  transition-all shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Appointment
                  </motion.button>
                </Link>
                <Link href="/our-doctor">
                  <motion.button
                    className="px-8 py-4 bg-[#FFA500] text-white rounded-full text-lg font-semibold  transition-all shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Meet Our Doctor
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <Image
                src="hero_section.jpg"
                alt="LiverCure Doctor"
                width={600}
                height={600}
                className="rounded-2xl mx-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
