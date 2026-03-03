import '../assets/css/image-text.css'
import Button from './button'

type ImageTextProps = {
  variant: 'image-left' | 'image-right'
  imageSrc: string
  imageAlt: string
  children: React.ReactNode
  buttonLabel?: string
  buttonHref?: string
  buttonAlign?: 'left' | 'right'
}

function ImageText({ variant, imageSrc, imageAlt, children, buttonLabel, buttonHref, buttonAlign = 'left' }: ImageTextProps) {
  return (
    <div className={`image-text image-text--${variant}`}>
      <div className="image-text__image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="image-text__content">
        {children}
        {buttonLabel && (
          <div className={`image-text__button image-text__button--${buttonAlign}`}>
            <Button variant="secondary" href={buttonHref}>{buttonLabel}</Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageText
