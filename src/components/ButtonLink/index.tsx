import React from 'react'
import Link, { LinkProps } from 'next/link'

import { AnchorContainer } from './styles'

interface ButtonLinkProps extends LinkProps {
  href: string
  target?: string
  variant?: 'primary' | 'secondary'
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  children,
  variant,
  target,
  ...rest
}) => {
  return (
    <Link href={href} passHref {...rest}>
      <AnchorContainer variant={variant} target={target}>
        {children}
      </AnchorContainer>
    </Link>
  )
}
export default ButtonLink
