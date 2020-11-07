import React, { useMemo } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/dist/client/router'

const NavLink: React.FC<LinkProps> = ({ children, href, ...rest }) => {
  const { asPath } = useRouter()

  const isActive = useMemo(() => asPath === href, [href, asPath])

  return (
    <Link href={href} passHref {...rest}>
      <a className={isActive ? 'active' : null}>{children}</a>
    </Link>
  )
}

export default NavLink
