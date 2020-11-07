import React from 'react'
import { Link, LinkProps } from 'react-scroll'

const NavScroll: React.FC<LinkProps> = ({ to, children, onClick }) => {
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
