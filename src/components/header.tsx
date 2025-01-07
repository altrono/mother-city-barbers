"use client"

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Phone, Clock, MapPin, Menu, X } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  const headerBackground = useTransform(
    scrollY,
    [0, 150],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  )

  useEffect(() => {
    const updateScrollStatus = () => {
      setIsScrolled(window.scrollY > 150)
    }

    window.addEventListener('scroll', updateScrollStatus)
    return () => window.removeEventListener('scroll', updateScrollStatus)
  }, [])

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.header 
      style={{ backgroundColor: headerBackground }}
      className="fixed top-0 left-0 right-0 z-50 text-white"
    >
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden md:block bg-white py-2">
        <div className="container mx-auto px-4 text-black">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-black" />
                <span className="text-sm">108 Long Street, Cape Town, 8001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-black" />
                <span className="text-sm">+27 78-971-4069</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-black" />
              <span className="text-sm">Mon-Sun: 9:00 AM - 10:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-black/80 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="">
              <img alt='mother city logo'src={'log.png'} />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-white hover:text-white/70 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              
              {/* Mobile Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-800 space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-white" />
                  <span className="text-sm">108 Long Street, Cape Town, 8001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-white" />
                  <span className="text-sm">+27 78-971-4069</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-white" />
                  <span className="text-sm">Mon-Sun: 9:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}








// "use client"

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence, useTransform, useScroll } from "framer-motion"
// import { Phone, Clock, MapPin, Menu, X } from 'lucide-react'
// import Link from 'next/link'


// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const { scrollY } = useScroll()

//   const headerBackground = useTransform(
//     scrollY,
//     [0, 150],
//     ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
//   )

//   useEffect(() => {
//     const updateScrollStatus = () => {
//       setIsScrolled(window.scrollY > 150)
//     }

//     window.addEventListener('scroll', updateScrollStatus)
//     return () => window.removeEventListener('scroll', updateScrollStatus)
//   }, [])

//   const menuItems = [
//     { name: 'Home', href: '#' },
//     { name: 'Services', href: '#services' },
//     { name: 'Gallery', href: '#gallery' },
//     { name: 'Team', href: '#team' },
//     { name: 'Testimonials', href: '#testimonials' },
//     { name: 'Contact', href: '#contact' }
//   ]

//   return (
//     <motion.header 
//       style={{ backgroundColor: headerBackground }}
//       className="fixed top-0 left-0 right-0 z-50 text-white"
//     >
//       {/* Top Bar - Hidden on Mobile */}
//       <div className="hidden md:block bg-white py-2">
//         <div className="container mx-auto px-4 text-black">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-6">
//               <div className="flex items-center gap-2">
//                 <MapPin className="h-4 w-4 text-black" />
//                 <span className="text-sm">108 Long Street, Cape Town, 8001</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Phone className="h-4 w-4 text-black" />
//                 <span className="text-sm">+27 78-971-4069</span>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <Clock className="h-4 w-4 text-black" />
//               <span className="text-sm">Mon-Sun: 9:00 AM - 10:00 PM</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="bg-black/80 py-4">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center">
//             {/* Logo */}
//             <Link href="/" className="">
//               <img alt='mother city logo'src={'log.png'} />
//             </Link>

//             {/* Desktop Menu */}
//             <nav className="hidden md:block">
//               <ul className="flex space-x-8">
//                 {menuItems.map((item) => (
//                   <li key={item.name}>
//                     <Link 
//                       href={item.href}
//                       className="text-white hover:text-white/70 transition-colors"
//                     >
//                       {item.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? (
//                 <X className="h-6 w-6 text-white" />
//               ) : (
//                 <Menu className="h-6 w-6 text-white" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-black"
//           >
//             <div className="container mx-auto px-4 py-4">
//               <nav className="flex flex-col space-y-4">
//                 {menuItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className="text-white hover:text-white transition-colors"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </nav>
              
//               {/* Mobile Contact Info */}
//               <div className="mt-6 pt-6 border-t border-gray-800 space-y-4">
//                 <div className="flex items-center gap-2">
//                   <MapPin className="h-4 w-4 text-white" />
//                   <span className="text-sm">108 Long Street, Cape Town, 8001</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Phone className="h-4 w-4 text-white" />
//                   <span className="text-sm">+27 78-971-4069</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Clock className="h-4 w-4 text-white" />
//                   <span className="text-sm">Mon-Sun: 9:00 AM - 10:00 PM</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   )
// }

