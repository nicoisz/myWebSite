import './App.css'
import Scene from './components/scene/Scene'
import Navigation from './components/ui/Navigation'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import TechSection from './components/sections/TechSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Scene />
      <main className="scroll-container" id="scroll-container">
        <HeroSection />
        <AboutSection />
        <TechSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
