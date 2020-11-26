import React from 'react'
import { Link, LinkProps } from 'react-scroll'
import NavLink from '../NavLink'

const NavScroll: React.FC<LinkProps> = ({ to, children, onClick }) => {
  if (process.browser && !document.getElementById(to)) {
    return <NavLink href={`/#${to}`}>{children}</NavLink>
  }

  return (
    <Link
      to={to}
      activeClass="active"
      spy
      smooth
      hashSpy
      isDynamic
      offset={-80}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default NavScroll
