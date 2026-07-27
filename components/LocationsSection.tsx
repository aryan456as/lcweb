'use client'

import { motion } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'

const locations = [
  {
    name: "Indira Nagar Clinic",
    address: "Sai Plaza, First Floor, B-Block Chauraha, Indira Nagar, Lucknow, Uttar Pradesh 226016",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113945.66359633341!2d80.88422252876532!3d26.814432894590723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd5461a3c6ef%3A0xa435f4a57a838cb9!2sLiverCure%20Clinics%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1736549782483!5m2!1sen!2sin" 
  }
]

const LocationsSection = () => {
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
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#800000] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Visit Our Clinics
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Expert Liver Care at a Convenient Location
        </motion.p>
        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={location.mapUrl}
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#800000] mb-2">{location.name}</h3>
                <div className="flex items-start">
                  <FiMapPin className="text-[#FFA500] mt-1 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">{location.address}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LocationsSection
