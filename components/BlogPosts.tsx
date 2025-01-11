'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    title: "Understanding Liver Health",
    excerpt: "Learn about the importance of liver health and how to maintain it through lifestyle choices.",
    image: "/blog-liver-health.jpg",
    date: "June 15, 2023",
  },
  {
    title: "Common Liver Diseases",
    excerpt: "Explore the most common liver diseases, their symptoms, and available treatments.",
    image: "/blog-liver-diseases.jpg",
    date: "June 22, 2023",
  },
  {
    title: "Nutrition for a Healthy Liver",
    excerpt: "Discover the best foods and dietary habits to support optimal liver function.",
    image: "/blog-liver-nutrition.jpg",
    date: "June 29, 2023",
  },
  {
    title: "Liver Cancer: Early Detection and Prevention",
    excerpt: "Learn about the risk factors, screening methods, and prevention strategies for liver cancer.",
    image: "/blog-liver-cancer.jpg",
    date: "July 6, 2023",
  },
]

const BlogPosts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          LiverCure Blog
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    Read More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPosts

