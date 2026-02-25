import './App.css'
import Nav from './components/nav'
import Hero from './components/hero'
import About from './screens/about'

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
          <h1>Services</h1>
        </section>
        <section id="work">
          <h1>Work</h1>
        </section>
        <section id="contact">
          <h1>Contact</h1>
        </section>
      </main>
    </>
  )
}

export default App
