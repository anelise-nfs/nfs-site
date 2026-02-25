import './App.css'
import Nav from './components/nav'
import Hero from './components/hero'
import About from './screens/about'
import Services from './screens/services'
import Work from './screens/work'
import Contact from './screens/contact'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="site-content">
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
