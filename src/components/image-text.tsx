import '../assets/css/image-text.css'

type ImageTextProps = {
  variant: 'image-left' | 'image-right'
  imageSrc: string
  imageAlt: string
  children: React.ReactNode
}

function ImageText({ variant, imageSrc, imageAlt, children }: ImageTextProps) {
  return (
    <div className={`image-text image-text--${variant}`}>
      <div className="image-text__image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="image-text__content">
        {children}
      </div>
    </div>
  )
}

export default ImageText
