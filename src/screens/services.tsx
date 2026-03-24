import '../assets/css/services.css'
import ImageText from '../components/image-text'
import Skills from '../components/skills'
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
          North Fork Solutions offers comprehensive digital services designed to help businesses grow. From brand strategy to web development, from marketing plans to choosing the right systems and software, Anelise brings expert knowledge to every stage of the process. The approach to every project starts with a deep understanding of the heart of the problem. My process is creative, collaborative, and transparent. AI and automation will be used to speed up delivery, but never at the expense of quality or individuality.
        </p>
        <p>
          Looking to build something big? Don't worry, it's not just me behind the scenes. I have a large network of talented designers, back-end developers, content creators, and many other industry experts that are ready to help deliver your dreams to reality.
        </p>
        <Skills />
      </div>
      <ImageText
        variant="image-right"
        imageSrc="../public/images/services-dev.jpg"
        imageAlt="Placeholder image"
        // buttonLabel="Learn More"
        // buttonHref="#"
        // buttonAlign="left"
      >
        <h2>Modern Web Solutions Built to Perform</h2>
        <p>
          Work with a developer who considers user experience and design in every decision while maintaining technical quality. No need for a pre-designed solution to start development — I can problem solve with your team, design and develop solutions, and deliver an end-product that typically needs fewer revisions before launch.
        </p>
        <ul>
          <li>Custom front-end development</li>
          <li>Website improvements and maintenance</li>
          <li>CMS implementation and optimization</li>
        </ul>
        <p>
          I love collaborating with teams of developers and I'm available to contract with your current dev team. Or if you need a team to develop your next big idea, I will happily build your dream team and manage the process from design to delivery.
        </p>
      </ImageText>
      <ImageText
        variant="image-left"
        imageSrc="../public/images/services-design_2.jpg"
        imageAlt="Placeholder image"
        // buttonLabel="Learn More"
        // buttonHref="#"
        // buttonAlign="left"
      >
        <h2>Visual Identity with Purpose</h2>
        <p>
          Creating visual systems with intention—where every color, typeface, and interface element serves a purpose. With over 15 years of experience in design and branding, I understand how to build cohesive visual identities that work across every touchpoint. If you like meticulous, intentional design, you've come to the right place (because, yes, there is actually a big difference in 2rem vs 2.1 rem font size).
        </p>
        <ul>
          <li>Brand identity and logo design</li>
          <li>UX/UI design and prototyping</li>
          <li>Marketing collateral and content templates</li>
          <li>Design system creation</li>
          <li>Collaboration and consulting services for marketing teams and creative directors</li>
        </ul>
      </ImageText>
      <ImageText
        variant="image-right"
        imageSrc="../public/images/services-strategy.jpg"
        imageAlt="Placeholder image"
        // buttonLabel="Learn More"
        // buttonHref="#"
        // buttonAlign="left"
      >
        <h2>Strategic Direction That Drives Growth</h2>
        <p>
          With expertise spanning marketing strategy, brand positioning, digital experiences, and business operations, I help organizations cut through the noise and focus on what matters. Whether you need a marketing plan, help integrating AI and automation into workflows, or tech stack organization, I turn strategic thinking into practical implementation that delivers results.
        </p>
        <ul>
          <li>Marketing strategy and business planning</li>
          <li>Brand positioning/messaging</li>
          <li>AI implementation and process automation</li>
          <li>Marketing technology integration</li>
          <li>Process documentation and training</li>
        </ul>
      </ImageText>
    </div>
  )
}

export default Services
