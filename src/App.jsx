import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustMarquee from './components/TrustMarquee'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustMarquee />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
