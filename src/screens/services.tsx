import '../assets/css/services.css'
import ImageText from '../components/image-text'
import { useReveal } from '../hooks/useReveal'

function Services () {
  const { ref, visible } = useReveal()

  return (
    <div className="services">
      <div
        ref={ref}
        className={`services-intro${visible ? ' services-intro--visible' : ''}`}
      >
        <h1>Expertise</h1>
        <p>
          North Fork Solutions offers comprehensive digital services designed to help businesses grow. From brand strategy to web development, from marketing plans to choosing the right systems and software, expert knowledge is available at every stage of the journey.
        </p>
        <p>
          My approach to every project is collaborative and transparent, enhanced by intelligent automation that accelerates delivery without sacrificing quality. AI is leveraged strategically — not as a shortcut, but as a powerful tool guided by expertise and precision. Through thoughtful prompts and a deep understanding of the logic behind each request, North Fork Solutions delivers custom-crafted solutions, not generic templates. This creates efficiency that benefits clients through faster timelines and exceptional outcomes.
        </p>
        <p>
          Looking to build something big? Don't worry, it's not just me behind the scenes. I have a large network of talented designers, back-end developers, and industry experts that can help deliver your dreams to reality.
        </p>
      </div>
      <ImageText
        variant="image-right"
        imageSrc="https://placehold.co/600x400"
        imageAlt="Placeholder image"
        buttonLabel="Learn More"
        buttonHref="#"
        buttonAlign="left"
      >
        <h2>Section Heading</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </ImageText>
      <ImageText
        variant="image-left"
        imageSrc="https://placehold.co/600x400"
        imageAlt="Placeholder image"
        buttonLabel="Learn More"
        buttonHref="#"
        buttonAlign="left"
      >
        <h2>Section Heading</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </ImageText>
      <ImageText
        variant="image-right"
        imageSrc="https://placehold.co/600x400"
        imageAlt="Placeholder image"
        buttonLabel="Learn More"
        buttonHref="#"
        buttonAlign="left"
      >
        <h2>Section Heading</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </ImageText>
    </div>
  )
}

export default Services
