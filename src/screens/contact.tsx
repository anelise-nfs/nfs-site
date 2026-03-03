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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
          </p>
      </div>
      <ContactBlock />
    </div>
  )
}

export default Contact
