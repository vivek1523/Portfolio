import LogoSection from "./sections/LogoSection"
import Navbar from "./components/Navbar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import ExperienceSection from "./sections/ExperienceSection"
import TechStacks from "./sections/TechStacks"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoSection/>
      <FeatureCards/>
      <ExperienceSection/>
      <TechStacks/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App