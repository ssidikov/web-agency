'use client'

interface CTAButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}

export default function CTAButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
}: CTAButtonProps) {
  // Size styles
  const sizeStyles = {
    sm: 'h-12 lg:h-14 text-base px-6 lg:px-7',
    md: 'h-14 lg:h-16 text-lg px-6 lg:px-8',
    lg: 'h-16 lg:h-[77px] 3xl:h-[98px] text-lg 3xl:text-xl px-6 lg:px-8',
    xl: 'h-18 lg:h-20 3xl:h-24 text-xl 3xl:text-2xl px-8 lg:px-10'
  }

  // Variant styles
  const variantStyles = {
    primary: 'group relative bg-black hover:bg-white text-white hover:text-black border border-black transition-all duration-300',
    secondary: 'relative text-gray-900 border border-black hover:bg-black hover:text-white transition-all duration-300'
  }

  // Base styles
  const baseStyles = 'w-full sm:w-auto font-medium whitespace-nowrap rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  const content = (
    <span className="relative flex items-center justify-center">
      {children}
    </span>
  )

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        aria-label={ariaLabel}
        role="button"
      >
        {variant === 'secondary' && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 hover:opacity-0 transition-opacity duration-200 rounded-full"></div>
        )}
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {variant === 'secondary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 hover:opacity-0 transition-opacity duration-200 rounded-full"></div>
      )}
      {content}
    </button>
  )
}
