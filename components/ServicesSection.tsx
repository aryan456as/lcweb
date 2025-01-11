'use client'

import { motion } from 'framer-motion'
import { FiActivity, FiHeart, FiShield } from 'react-icons/fi'
import Image from 'next/image'

const services = [
  {
    icon: <FiHeart className="text-4xl text-[#800000]" />,
    title: "Liver Health Assessment",
    description: "Comprehensive evaluation of your liver function through modern diagnosis.",
    image: "/fibroscan.png"
  },
  {
    icon: <FiActivity className="text-4xl text-[#800000]" />,
    title: "Homeopathic Treatment",
    description: "Natural and effective homeopathic treatments for various liver conditions.",
    image: "/homeopathy.jpg"
  },
  {
    icon: <FiShield className="text-4xl text-[#800000]" />,
    title: "Preventive Care",
    description: "Holistic approach to liver health maintenance and disease prevention.",
    image: "/preventive-care.jpg"
  },
]

const ServicesSection = () => {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden" id="services">
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#800000] mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#800000] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

