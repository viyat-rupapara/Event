import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Sangam from './components/Sangam'
import Sponsorship from './components/Sponsorship'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import ScrollProgress from './components/ScrollProgress'
import FloatingButtons from './components/FloatingButtons'
import PageLoader from './components/PageLoader'
import './App.css'

function App() {
  return (
    <div className="app">
      <PageLoader />
      <ParticleBackground />
      <ScrollProgress />
      <FloatingButtons />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Sangam />
        <Sponsorship />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
