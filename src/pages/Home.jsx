import TopBar from "../components/TopBar"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import MissionVisionSection from "../components/MissionVisionSection"
import EducationSection from "../components/EducationSection"
import ImpactSection from "../components/ImpactSection"
import CtaSection from "../components/CtaSection"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <MissionVisionSection />
      <EducationSection />
      <ImpactSection />
      <CtaSection />
      <NewsLetter />
      <Footer />
    </div>
  )
}   
export default Home 