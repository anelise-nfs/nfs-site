import { useState } from 'react'
import '../assets/css/contact-block.css'
import Button from './button'

type FormFields = {
  name: string
  email: string
  message: string
}

type FieldStatus = 'idle' | 'valid' | 'invalid'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function ContactBlock() {
  const [fields, setFields] = useState<FormFields>({ name: '', email: '', message: '' })
  const [touched, setTouched] = useState<Record<keyof FormFields, boolean>>({
    name: false, email: false, message: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const validate = (key: keyof FormFields, value: string): FieldStatus => {
    if (key === 'email') return emailRegex.test(value.trim()) ? 'valid' : 'invalid'
    return value.trim().length > 0 ? 'valid' : 'invalid'
  }

  const getStatus = (key: keyof FormFields): FieldStatus => {
    if (!touched[key]) return 'idle'
    return validate(key, fields[key])
  }

  const handleChange = (key: keyof FormFields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields(f => ({ ...f, [key]: e.target.value }))
      setTouched(t => ({ ...t, [key]: true }))
    }

  const handleBlur = (key: keyof FormFields) => () =>
    setTouched(t => ({ ...t, [key]: true }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    const allValid = (Object.keys(fields) as (keyof FormFields)[]).every(
      k => validate(k, fields[k]) === 'valid'
    )
    if (!allValid) return
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...fields }).toString(),
      })
      setSubmitted(true)
    } catch {
      setSubmitError(true)
    }
  }

  const CheckIcon = ({ area = false }: { area?: boolean }) => (
    <svg
      className={`field-icon field-icon--valid${area ? ' field-icon--area' : ''}`}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )

  const XIcon = ({ area = false }: { area?: boolean }) => (
    <svg
      className={`field-icon field-icon--invalid${area ? ' field-icon--area' : ''}`}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )

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
        <div className={`contact-form-wrapper${submitted ? ' contact-form-wrapper--submitted' : ''}`}>

          <form className="contact-form" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} noValidate>
            <input type="hidden" name="form-name" value="contact" />
            {(['name', 'email', 'message'] as (keyof FormFields)[]).map(key => {
              const status = getStatus(key)
              const isArea = key === 'message'
              return (
                <div
                  key={key}
                  className={`contact-form__field contact-form__field--${status}`}
                >
                  <label htmlFor={`contact-${key}`}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <div className="contact-form__input-wrap">
                    {isArea ? (
                      <textarea
                        id={`contact-${key}`}
                        placeholder={`Your ${key}`}
                        value={fields[key]}
                        onChange={handleChange(key)}
                        onBlur={handleBlur(key)}
                      />
                    ) : (
                      <input
                        id={`contact-${key}`}
                        type={key === 'email' ? 'email' : 'text'}
                        placeholder={`Your ${key}`}
                        value={fields[key]}
                        onChange={handleChange(key)}
                        onBlur={handleBlur(key)}
                      />
                    )}
                    {status === 'valid' && <CheckIcon area={isArea} />}
                    {status === 'invalid' && <XIcon area={isArea} />}
                  </div>
                  {status === 'invalid' && (
                    <span className="contact-form__error">
                      {key === 'email'
                        ? 'Please enter a valid email address'
                        : `${key.charAt(0).toUpperCase() + key.slice(1)} is required`}
                    </span>
                  )}
                </div>
              )
            })}
            <Button variant="primary">send message</Button>
            {submitError && (
              <p className="contact-form__submit-error">Something went wrong — please try again.</p>
            )}
          </form>

          <div className="contact-form__success" aria-live="polite">
            <div className="contact-form__success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h4>Message sent!</h4>
            <p>Thanks for reaching out. We'll get back to you soon.</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ContactBlock
