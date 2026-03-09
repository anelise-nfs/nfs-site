import '../assets/css/about.css'
import ImageText from '../components/image-text'
import FourSquareInfo from '../components/four-square-info'
import { useReveal } from '../hooks/useReveal'
import { CodeBracketIcon, SwatchIcon, ArrowTrendingUpIcon, SparklesIcon } from '@heroicons/react/24/outline'

function About() {
  const { ref, visible } = useReveal()

  return (
    <div className="about">
      <div
        ref={ref}
        className={`about-intro${visible ? ' about-intro--visible' : ''}`}
      >
        <h1>About Us</h1>
        <p className="about__bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
      <FourSquareInfo
        items={[
          {
            icon: <CodeBracketIcon />,
            title: 'Development',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          },
          {
            icon: <SwatchIcon />,
            title: 'Design',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          },
          {
            icon: <ArrowTrendingUpIcon />,
            title: 'Marketing',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          },
          {
            icon: <SparklesIcon />,
            title: 'Brand Strategy',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          },
        ]}
      />
    </div>
  )
}

export default About
