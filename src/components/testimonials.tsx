"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: "Best barbershop in town! The attention to detail and service is outstanding.",
    author: "Michael Brown",
    role: "Regular Customer"
  },
  {
    text: "I've been coming here for years. The quality and consistency is unmatched.",
    author: "David Wilson",
    role: "Loyal Client"
  },
  {
    text: "Professional service with a personal touch. Highly recommended!",
    author: "James Anderson",
    role: "First-time Customer"
  }
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id='testimonials' className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">What Clients Say</h2>
          <p className="text-white">Testimonials from Our Valued Customers</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="mx-auto h-12 w-12 text-white mb-6" />
              <p className="text-xl text-gray-300 mb-6 italic">{testimonials[current].text}</p>
              <h3 className="text-white font-bold text-lg">
                {testimonials[current].author}
              </h3>
              <p className="text-white-500">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? 'bg-white-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

