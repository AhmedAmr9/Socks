import HeaderProfessional from '../components/Header-Professional'
import HeroProfessional from '../components/Hero-Professional'
import StaffSection from '../components/StaffSection'
import SoftOpening from '../components/SoftOpening'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Instructions from '../components/Instructions'
import Contact from '../components/Contact'

export default function PageProfessional() {
  return (
    <div className="min-h-screen bg-coffee-50">
      <HeaderProfessional />
      <HeroProfessional />
      
      <div id="staff" className="scroll-mt-20">
        <StaffSection />
      </div>
      
      <div id="soft-opening" className="scroll-mt-20">
        <SoftOpening />
      </div>
      
      <div id="menu" className="scroll-mt-20">
        <Menu />
      </div>
      
      <div id="instructions" className="scroll-mt-20">
        <Instructions />
      </div>

      <div id="Contac" className="scroll-mt-20">
        <Contact />
      </div>
      
      <div id="footer" className="scroll-mt-20">
        <Footer />
      </div>
    </div>
  )
}
