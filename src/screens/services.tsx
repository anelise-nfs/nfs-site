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
        <h1>Services</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
