"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Berger Barbershop</h3>
            <p className="text-gray-400">
              Premium grooming services for the modern gentleman.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">108 Long St, Cape Town City Centre, Cape Town, 8000</p>
            <p className="text-gray-400">Phone: +27 78-971-4069</p>
            <p className="text-gray-400">Email: info@mothercitybarbers.co.za</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/mothercitybarbersatlong/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/mother_city_barbers/?hl=en"target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Mother City Barbers. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

