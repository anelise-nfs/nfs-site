import '../assets/css/button.css'

type ButtonProps = {
  variant: 'primary' | 'secondary'
  children: React.ReactNode
  href?: string
  onClick?: () => void
}

function Button({ variant, children, href, onClick }: ButtonProps) {
  const className = `btn btn--${variant}`

  if (href) {
    return <a href={href} className={className}>{children}</a>
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
