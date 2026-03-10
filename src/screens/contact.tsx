import '../assets/css/contact.css'
import ContactBlock from '../components/contact-block'
import { useReveal } from '../hooks/useReveal'

function Contact() {
  const { ref, visible } = useReveal()

  return (
    <div className="contact">
      <div
        ref={ref}
        className={`contact-intro${visible ? ' contact-intro--visible' : ''}`}
      >
        <h1>Let's Work Together</h1>
        <p>
          Ready to transform your business? Whether it's starting from the ground up with a complete brand and website, a strategic refresh, or implementing operational systems that actually work, North Fork Solutions is here to help. Schedule a free 30-minute consultation for an honest conversation about goals, challenges, and solutions.
          </p>
      </div>
      <ContactBlock />
    </div>
  )
}

export default Contact
