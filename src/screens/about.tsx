import '../assets/css/about.css'
import ImageText from '../components/image-text'
import FourSquareInfo from '../components/four-square-info'
import Button from '../components/button'
import { useReveal } from '../hooks/useReveal'
import { CodeBracketIcon, SwatchIcon, ArrowTrendingUpIcon, CircleStackIcon } from '@heroicons/react/24/outline'

function About() {
  const { ref, visible } = useReveal(0.5)

  return (
    <div className="about">
      <div
        ref={ref}
        className={`about-intro${visible ? ' about-intro--visible' : ''}`}
      >
        <h3 className="about__bio">
        Exceptional digital experiences don't happen by accident — they're the result of strategy, design, and development working in harmony. North Fork Solutions delivers integrated solutions where strategic thinking, creative design, and modern technology converge to drive real business results.
        </h3>
      </div>
      <ImageText
        variant="image-right"
        imageSrc="/images/about-headshot_600x400.jpg"
        imageAlt="anelise headshot"
      >
        <h2>About Us</h2>
        <p>
        Hi, I'm Anelise, the creative and technical force behind North Fork Solutions. As a front-end web developer with over 15 years of experience in marketing and design, my specialty is visual transformations that improve user experience and drive value. With a deep understanding of design and user experience and four years of experience in front-end web development, I bridge the gap between strategic thinking, visual design, and technical execution.
        </p>
        <p>
        Whether it's launching a brand new company, refreshing a brand, or collaborating with a large dev team, I bring the expertise to transform your vision into reality and guide projects from concept to completion.
        </p>
        <blockquote className="about-quote">
          "Anelise brings a dual fluency that is hard to find; she thinks like a marketer and builds like a developer. That combination means she's not just executing a design, she's asking the right questions, and those instincts show up in everything she delivers."
          <cite className="about-quote__person">— Sarah Miller, Director of Marketing Technology at Grand America Hotels & Resorts</cite>
        </blockquote>
      </ImageText>
      <FourSquareInfo
        items={[
          {
            icon: <CodeBracketIcon />,
            title: 'Development',
            text: 'Modern, responsive websites built with UX at heart. Thoughtful design meets technical excellence.',
          },
          {
            icon: <SwatchIcon />,
            title: 'Design',
            text: 'Digital experiences crafted with purpose and precision. Beautiful, functional solutions that resonate.',
          },
          {
            icon: <ArrowTrendingUpIcon />,
            title: 'Brand Strategy',
            text: 'Positioning developed with clarity and intention. Strategic direction that differentiates and drives value.',
          },
          {
            icon: <CircleStackIcon />,
            title: 'Intelligent Automation',
            text: 'AI solutions implemented with purpose. Thoughtful automation that drives performance.',
          },
        ]}
      />
      <div className="about__cta">
        <Button variant="primary" href="#contact">Schedule a Call</Button>
      </div>
    </div>
  )
}

export default About
