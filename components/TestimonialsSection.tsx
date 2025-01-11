'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: "Aryan Singh",
    role: "Patient",
    image: "/user_photo1.jpg",
    quote: "The care I received at LiverCure Clinic was exceptional. The staff was friendly and professional."
  },
  {
    name: "Vivek Sharma",
    role: "Patient",
    image: "/user_photo2.jpeg",
    quote: "I'm grateful for the personalized treatment plan that helped me recover quickly from my liver condition."
  },
  {
    name: "Ishan Verma",
    role: "Patient",
    image: "/user_photo3.jpeg",
    quote: "Dr. Shailendra Singh at LiverCure is truly an expert in his field. I felt completely confident and well cared for throughout my liver treatment."
  },
]

const TestimonialsSection = () => {
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
            left: '50%',
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
          What Our Patients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-[#800000]">{testimonial.name}</h3>
                  <p className="text-[#FFA500]">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

