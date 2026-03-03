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
        <h1>Our Work</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
      <Showcase />
    </div>
  )
}

export default Work
