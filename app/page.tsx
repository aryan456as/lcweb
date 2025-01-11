import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import ServicesSection from "../components/ServicesSection"
import ViewAllServices from "../components/ViewAllServices"
import OurDoctorSection from "../components/OurDoctorSection"
import TestimonialsSection from "../components/TestimonialsSection"
import WhyChooseUsSection from "../components/WhyChooseUsSection"
import LocationsSection from "../components/LocationsSection"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ViewAllServices />
      <OurDoctorSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <LocationsSection />
      <Footer />
    </main>
  )
}

