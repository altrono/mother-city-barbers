"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from 'lucide-react'

const team = [
  {
    name: "Djuma the Barber",
    role: "Master Barber",
    image: "/barber.png",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  },
  {
    name: "Jane Smith",
    role: "Senior Stylist",
    image: "/barber.png",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  },
  {
    name: "Mike Johnson",
    role: "Beard Specialist",
    image: "/barber.png",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  }
]

export function Team() {
  return (
    <section id="team" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white mt-20">Meet Our Team</h2>
          <p className="text-white/80">Expert Barbers at Your Service</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-white mb-4">{member.role}</p>
                    <div className="flex space-x-4">
                      <a href={member.social.facebook} className="text-blue-400 hover:text-white transition-colors">
                        <Facebook />
                      </a>
                      <a href={member.social.instagram} className="text-red-400 hover:text-white transition-colors">
                        <Instagram />
                      </a>
                      <a href={member.social.twitter} className="text-blue-300 hover:text-white transition-colors">
                        <Twitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

