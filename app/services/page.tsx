import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ServicesSection from "../../components/ServicesSection"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        <ServicesSection />
      </div>
      <Footer />
    </main>
  )
}

