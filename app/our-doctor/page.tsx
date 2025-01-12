'use client'

import { motion } from 'framer-motion'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Link from 'next/link'
import Image from 'next/image'

export default function OurDoctor() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="pt-32 pb-20">
        
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src="/doc_img.jpeg?height=600&width=450"
                  alt="Dr. Shailendra Singh"
                  width={450}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h1 className="text-4xl font-bold text-[#800000] mb-4">Dr. Shailendra Singh</h1>
                <p className="text-[#FFA500] text-xl font-medium mb-6">MD</p>
                
                <div className="space-y-6 text-gray-600">
                  <div>
                    <h2 className="text-2xl font-semibold text-[#800000] mb-3">Specialization</h2>
                    <p>
                      Homeopathic Liver Care, Chronic Liver Conditions, Preventive Medicine
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-[#800000] mb-3">Experience</h2>
                    <p>
                      With over 20 years of experience in homeopathic medicine, Dr. Singh has 
                      successfully treated thousands of patients with various liver conditions. His
                      approach combines traditional homeopathic principles with modern medical knowledge.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-[#800000] mb-3">Education</h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Bachelor of Homeopathic Medicine and Surgery (BHMS)</li>
                      <li>MD in Homeopathy</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-[#800000] mb-3">Expertise</h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Fatty Liver Disease Treatment</li>
                      <li>Cirrhosis Management</li>
                      <li>Hepatitis Care</li>
                      <li>Liver Function Optimization</li>
                      <li>Preventive Liver Care</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-[#800000] mb-3">Approach</h2>
                    <p>
                      Dr. Shailendra believes in a holistic approach to liver health, combining 
                      homeopathic treatments with lifestyle modifications and dietary recommendations. 
                      His patient-centered approach ensures personalized care for optimal results.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/book-appointment"
                    className="inline-block bg-[#800000] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#FFA500] transition-colors"
                  >
                    Book an Appointment
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

