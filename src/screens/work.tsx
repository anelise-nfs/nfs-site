import '../assets/css/work.css'
import Showcase from '../components/showcase'
import { useReveal } from '../hooks/useReveal'

function Work() {
  const { ref, visible } = useReveal()

  return (
    <div className="work">
      <div
        ref={ref}
        className={`work-intro${visible ? ' work-intro--visible' : ''}`}
      >
        <h1>Successful Projects</h1>
        <p>
          Throughout my career I have built brands, developed and supported multi-faceted marketing campaigns, and designed and coded custom web applications and solutions for a variety of companies. Here's a look at some recent work that showcases the design, development, and strategy work I love to do.
        </p>
        <p className="work-intro__disclaimer">
          Please note that this portfolio includes past work and independent projects. Projects shown do not necessarily represent current clients.
        </p>
      </div>
      <Showcase />
    </div>
  )
}

export default Work
