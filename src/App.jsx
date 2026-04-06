import { Header } from './views/components/Header'
import { Hero } from './views/sections/Hero'
import { About } from './views/sections/About'
import { Projects } from './views/sections/Projects'
import { Contact } from './views/sections/Contact'
import { Footer } from './views/components/Footer' 
import { Skills } from './views/sections/Skills'

export default function App() {
  return (
    <>
  <Header />
  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </main>
  <Footer />
</>
  )
}