import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'

import ButtonLink from '../../ButtonLink'
import NavScroll from '../../NavScroll'

import { HeaderContainer } from './styles'

const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 40)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <HeaderContainer menuIsOpen={menuIsOpen} isScrolled={isScrolled}>
      <div className="container">
        <div className="header-left">
          <Link href="/" passHref>
            <a className="logo">
              <img src="/assets/logo.svg" title="Logotipo do DEVPIRA" />
            </a>
          </Link>
          <button
            type="button"
            className="btn-menu"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <FiMenu />
          </button>
        </div>
        <nav className="menu">
          <div>
            <ul>
              <li>
                <NavScroll to="event" onClick={() => setMenuIsOpen(false)}>
                  Evento
                </NavScroll>
              </li>
              <li>
                <NavScroll to="community" onClick={() => setMenuIsOpen(false)}>
                  Comunidade
                </NavScroll>
              </li>
              <li>
                <NavScroll to="trails" onClick={() => setMenuIsOpen(false)}>
                  Trilhas
                </NavScroll>
              </li>
              <li>
                <NavScroll to="sponsors" onClick={() => setMenuIsOpen(false)}>
                  Apoio
                </NavScroll>
              </li>
            </ul>
          </div>
        </nav>
        <ButtonLink href="https://www.sympla.com.br/devpira-festival20__1004571">
          Inscreva-se
        </ButtonLink>
      </div>
    </HeaderContainer>
  )
}

export default Header
