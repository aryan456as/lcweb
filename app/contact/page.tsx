'use client'

import { motion } from 'framer-motion'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { MapPin, Phone, Mail } from 'lucide-react'
import LocationsSection from '@/components/LocationsSection'
import Link from 'next/link'

export default function ContactPage() {
  const clinics = [
    {
      name: "Clinic 1",
      address: "Sai Plaza, First Floor, B-Block Chauraha, Indira Nagar, Lucknow UP, India, - 226016"
    },
    {
      name: "Clinic 2",
      address: "Shop No 1, Hotel Kunti International, Near SGPGI, Lucknow UP, India, 226014"
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {/* Address Section */}
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 bg-[#800000]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-[#800000]" />
              </div>
              <h2 className="text-xl font-semibold text-[#800000] mb-4">Our Locations</h2>
              {clinics.map((clinic, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-2">{clinic.name}</h3>
                  <p className="text-gray-600">{clinic.address}</p>
                </div>
              ))}
            </motion.div>

            {/* Phone Section */}
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-[#800000]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-[#800000]" />
              </div>
              <h2 className="text-xl font-semibold text-[#800000] mb-4">Phone</h2>
              <Link 
                href="tel:8400065000"
                className="text-lg text-gray-600 hover:text-[#800000] transition-colors"
              >
                +91-8400065000
              </Link>
            </motion.div>

            {/* Email Section */}
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-20 h-20 bg-[#800000]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-[#800000]" />
              </div>
              <h2 className="text-xl font-semibold text-[#800000] mb-4">Email</h2>
              <Link 
                href="mailto:curemyliver@gmail.com"
                className="text-lg text-gray-600 hover:text-[#800000] transition-colors"
              >
                curemyliver@gmail.com
              </Link>
            </motion.div>
          </div>

          {/* Map Section */}
          <LocationsSection />
        </div>
      </section>
      <Footer />
    </main>
  )
}

