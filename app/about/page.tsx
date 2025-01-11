'use client'

import { motion } from 'framer-motion'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Image from "next/image"
import WhyChooseUsSection from '@/components/WhyChooseUsSection'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About LiverCure Clinic
          </motion.h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/livercure_ext.jpg?height=400&width=600"
                alt="LiverCure Clinic Exterior"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-[#800000] mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                LiverCure Clinics has been at the forefront of liver care for over two decades. Our mission is to provide the highest quality homeopathic treatments for liver conditions, combining traditional wisdom with modern medical advancements.
              </p>
              <p className="text-gray-600 mb-6">
                We are committed to advancing liver health through innovative treatments, ongoing research, and patient education. Our holistic approach to liver care has helped thousands of patients lead healthier lives.
              </p>
              <p className="text-gray-600">
                At LiverCure Clinics, we believe in personalized care tailored to each patient's unique needs. Our compassionate staff and cutting-edge technology work together to deliver exceptional outcomes and improve the quality of life for those dealing with liver issues.
              </p>
            </motion.div>
          </div>
          <div className="pt-20">
        <WhyChooseUsSection />
      </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

