import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ResultsTicker from './components/ResultsTicker'
import Stats from './components/Stats'
import Courses from './components/Courses'
import Philosophy from './components/Philosophy'
import BatchSchedule from './components/BatchSchedule'
import Faculty from './components/Faculty'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-void min-h-screen">
      <Navbar />
      <Hero />
      <ResultsTicker />
      <Stats />
      <Courses />
      <Philosophy />
      <BatchSchedule />
      <Faculty />
      <Pricing />
      <Footer />
    </div>
  )
}
