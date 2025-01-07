import { Booking } from "@/components/booking"
import { Footer } from "@/components/footer"
import { Gallery } from "@/components/galleries"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { WhatsAppButton } from "@/components/whatsapp-button"
// import { Services } from "@/components/services"
// import { Gallery } from "@/components/gallery"
// import { Team } from "@/components/team"
// import { Testimonials } from "@/components/testimonials"
// import { Booking } from "@/components/booking"
// import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
     <Services />
     <Gallery />
     <Team />
    <Testimonials />
    <Booking />  
    <Footer /> 
    <WhatsAppButton />
    </main>
  )
}