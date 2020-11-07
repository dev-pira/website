import React from 'react'
import Link from 'next/link'
import ButtonLink from '../../ButtonLink'
import NavScroll from '../../NavScroll'

import { FooterContainer } from './styles'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Link href="/" passHref>
              <a>
                <img
                  src="/assets/logo.svg"
                  alt="Logotipo DEVPIRA"
                  width={255}
                  height={105}
                />
              </a>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-8 col-xl-9">
            <nav>
              <ul>
                <li>
                  <NavScroll to="event">Evento</NavScroll>
                </li>
                <li>
                  <NavScroll to="community">Comunidade</NavScroll>
                </li>
                <li>
                  <NavScroll to="testimonials">Depoimentos</NavScroll>
                </li>
                <li>
                  <NavScroll to="trails">Trilhas</NavScroll>
                </li>
                <li>
                  <NavScroll to="sponsors">Apoio</NavScroll>
                </li>
              </ul>
              <ButtonLink
                href="https://www.sympla.com.br/devpira-festival20__1004571"
                target="_blank"
              >
                Inscreva-se
              </ButtonLink>
            </nav>
          </div>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
