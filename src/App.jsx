import { useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustMarquee from './components/TrustMarquee'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import LeadForm from './components/LeadForm'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import AccessibilityWidget from './components/AccessibilityWidget'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
      {loaded && (
        <>
          <Navbar />
          <main>
            <Hero />
            <TrustMarquee />
            <Services />
            <Gallery />
            <Reviews />
            <LeadForm />
            <Contact />
          </main>
          <Footer />
          <FloatingWhatsApp />
          <AccessibilityWidget
            businessName="גארדן גיזומים"
            phone="054-955-2228"
            email="webforyoutwo@gmail.com"
          />
        </>
      )}
    </>
  )
}
