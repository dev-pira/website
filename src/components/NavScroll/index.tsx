import React, { useState, useEffect } from 'react'
import { Link, LinkProps } from 'react-scroll'
import NavLink from '../NavLink'

const NavScroll: React.FC<LinkProps> = ({ to, children, onClick }) => {
  const [isScrollable, setIsScrollable] = useState(true)

  useEffect(() => {
    if (process.browser) {
      setIsScrollable(!!document.getElementById(to))
    }
  }, [to])

  return isScrollable ? (
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
  ) : (
    <NavLink href={`/#${to}`}>{children}</NavLink>
  )
}

export default NavScroll
