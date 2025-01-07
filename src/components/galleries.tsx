"use client"

import { useRef } from "react"
import { motion, } from "framer-motion"
import Image from "next/image"

const galleryImages = [
  {
    title: "Classic Haircut",
    description: "Traditional barbering techniques with modern style",
    image: "/g.jpg"
  },
  {
    title: "Hot Towel Shave",
    description: "Luxurious traditional straight razor shave",
    image: "/g2.jpg"
  },
  {
    title: "Hair Stylingr",
    description: "Contemporary styling for any occasion",
    image: "/g3.jpg"
  },
  {
    title: "Hair Stylinge",
    description: "Contemporary styling for any occasion",
    image: "/ca6.png"
  },
  {
    title: "Hair Stylings",
    description: "Contemporary styling for any occasion",
    image: "/g5.jpg"
  },
  {
    title: "Hair Stylins",
    description: "Contemporary styling for any occasion",
    image: "/g6.jpg"
  },
  
]

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null)


  return (
    <div id="gallery" ref={containerRef} className="bg-black py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mb-12 text-center"
      >
        <h2 className="text-4xl font-bold mb-4 text-white mt-20">Our Gallery</h2>
        <p className="text-white/80 text-lg">Experience the art of barbering</p>
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => {
            

            return (
              <motion.div
                key={index}
               
                className="relative group"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col items-center justify-center h-full text-white">
                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-bold mb-2"
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white"
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

