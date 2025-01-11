'use client'

import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiHeart } from 'react-icons/fi'

const reasons = [
  {
    icon: <FiAward className="w-12 h-12 text-[#FFA500]" />,
    title: "Expert Care",
    description: "Our team of experienced homeopathic doctors specializes in liver care and stays up-to-date with the latest advancements."
  },
  {
    icon: <FiUsers className="w-12 h-12 text-[#FFA500]" />,
    title: "Personalized Treatment",
    description: "We develop customized treatment plans tailored to each patient's specific condition, lifestyle, and health goals."
  },
  {
    icon: <FiHeart className="w-12 h-12 text-[#FFA500]" />,
    title: "Holistic Approach",
    description: "Our treatments address not just the symptoms but the root cause of liver issues, promoting overall health and well-being."
  }
]

const WhyChooseUsSection = () => {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
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
            right: '50%',
            transform: 'translate(50%, -50%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#800000] mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose LiverCure?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-[#800000] text-center mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-center">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection

