'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const OurDoctorSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gray-50">
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
            left: '-50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#800000] mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Doctor
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <Image
                src="/doc_img.jpeg?height=400&width=400"
                alt="Dr. Shailendra Singh"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-[#800000] mb-2">Dr. Shailendra Singh</h3>
              <p className="text-[#FFA500] font-medium mb-4">BHMS, MD - Homeopathy</p>
              <p className="text-gray-600 mb-6">
          
              Dr. Shailendra Singh, founder of the world’s first Gastroliver Homeopathy services in Lucknow, India, is a pioneer in liver health. A graduate of Fr. Muller Homeopathic Medical College and a post-graduate from SSN Institute, he brings modern, scientific solutions to homeopathy.

With over a decade of experience, Dr. Singh has successfully treated countless cases of Fatty Liver and Liver Cirrhosis. His mission is to raise awareness about liver health and provide effective, homeopathic treatments for this vital yet often overlooked organ.

Rediscover health with LiverCure – A Modern Approach to Liver Wellness.
              </p>
              <Link href="/our-doctor">
                <motion.button
                  className="bg-[#800000] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#FFA500] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Full Profile
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurDoctorSection

