import '../assets/css/button.css'

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'toggle'
  children: React.ReactNode
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
  active?: boolean
}

function Button({ variant, children, href, target, rel, onClick, active }: ButtonProps) {
  const className = `btn btn--${variant}${active ? ' btn--active' : ''}`

  if (href) {
    return <a href={href} className={className} target={target} rel={rel}>{children}</a>
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
