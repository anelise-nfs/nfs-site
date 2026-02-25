import '../assets/css/contact-block.css'
import Button from './button'

function ContactBlock() {
  return (
    <div className="contact-block">

      <div className="contact-block__left">
        <h3 className="contact-block__title">Get in touch</h3>
        <p className="contact-block__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Reach out and we'll
          get back to you as soon as possible.
        </p>
        <div className="contact-block__cards">

          <a className="contact-card" href="tel:+15551234567">
            <div className="contact-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12 19.79 19.79 0 0 1 1.42 3.38 2 2 0 0 1 3.42 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
              </svg>
            </div>
            <div className="contact-card__info">
              <span className="contact-card__label">Call Us</span>
              <span className="contact-card__value">+1 (555) 123-4567</span>
            </div>
          </a>

          <a className="contact-card" href="mailto:hello@northforksolutions.com">
            <div className="contact-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div className="contact-card__info">
              <span className="contact-card__label">Email Us</span>
              <span className="contact-card__value">hello@northforksolutions.com</span>
            </div>
          </a>

        </div>
      </div>

      <div className="contact-block__right">
        <form className="contact-form">
          <div className="contact-form__field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" type="text" placeholder="Your name" />
          </div>
          <div className="contact-form__field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" type="email" placeholder="Your email" />
          </div>
          <div className="contact-form__field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" placeholder="Your message" />
          </div>
          <Button variant="primary">send message</Button>
        </form>
      </div>

    </div>
  )
}

export default ContactBlock
