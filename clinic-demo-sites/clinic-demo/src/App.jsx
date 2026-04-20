import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Stats from './components/Stats'
import Philosophy from './components/Philosophy'
import Treatments from './components/Treatments'
import Diagnostic from './components/Diagnostic'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-void min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <Philosophy />
      <Treatments />
      <Diagnostic />
      <Pricing />
      <Footer />
    </div>
  )
}
