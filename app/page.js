import HeaderProfessional from "@/components/Header-Professional"
import HeroProfessional from "@/components/Hero-Professional"
import About from "@/components/About"
import Menu from "@/components/Menu"
import StaffSection from "@/components/StaffSection"
import SoftOpening from "@/components/SoftOpening"
import Footer from "@/components/Footer"
import Instructions from "@/components/Instructions"
import Contact from "../components/Contact"

export default function Home() {
    const Divider = () => (
    <div className="my-12 border-t border-gray-200 shadow-sm"></div>
  );
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <HeaderProfessional />
      <HeroProfessional />
      <About />
      <StaffSection />
      <SoftOpening />
      <Menu />
      <Instructions />
      <Contact />
      <Footer />
    </main>
  )
}
