import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { StickyMobileCTA } from './components/ui/StickyMobileCTA'
import { Hero } from './components/sections/Hero'
import { ProblemStatement } from './components/sections/ProblemStatement'
import { Courses } from './components/sections/Courses'
import { Features } from './components/sections/Features'
import { Curriculum } from './components/sections/Curriculum'
import { ForWho } from './components/sections/ForWho'
import { Testimonials } from './components/sections/Testimonials'
import { FAQ } from './components/sections/FAQ'
import { FinalCTA } from './components/sections/FinalCTA'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <Courses />
        <Features />
        <Curriculum />
        <ForWho />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  )
}
