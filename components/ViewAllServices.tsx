'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const ViewAllServices = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-[#FFA500]/5 to-[#800000]/5 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-full aspect-square rounded-full bg-gradient-to-r from-[#FFA500]/10 to-[#800000]/10"
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
            right: '-50%',
            transform: 'translate(50%, -50%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#800000] mb-4">Discover Our Comprehensive Services</h2>
          <p className="text-gray-600 mb-6">
            Explore our full range of homeopathic treatments and liver care services tailored to your needs.
          </p>
          <Link href="/services">
            <motion.button
              className="inline-flex items-center bg-[#800000] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#FFA500] transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
              <FiArrowRight className="ml-2" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ViewAllServices

