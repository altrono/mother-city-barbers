"use client"

import { motion } from "framer-motion"
import { Scissors, BeakerIcon as Beard, SprayCanIcon as Spray, Coffee } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: "Haircut",
    description: "Professional haircut with consultation",
  },
  {
    icon: Beard,
    title: "Beard Trim",
    description: "Shape and style your beard",

  },
  {
    icon: Spray,
    title: "Hair Styling",
    description: "Style for any occasion",

  },
  {
    icon: Coffee,
    title: "Hot Towel Shave",
    description: "Traditional straight razor shave",
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white mt-20">Our Services</h2>
          <p className="text-white">Professional Care For Your Style</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg text-center group hover:bg-white transition-colors duration-300"
            >
              <div className="mb-4 flex justify-center">
                <service.icon className="h-12 w-12 text-white group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-black">{service.title}</h3>
              <p className="text-gray-400 mb-4 group-hover:text-black">{service.description}</p>
            
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

