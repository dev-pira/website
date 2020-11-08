import React from 'react'
import { GetStaticProps } from 'next'
import { FaChevronDown } from 'react-icons/fa'
import { Link as LinkScroll } from 'react-scroll'
import dynamic from 'next/dynamic'
import getTrails, { Trail } from '../data/trails'

import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill
} from 'react-icons/ri'

import ButtonLink from '../components/ButtonLink'
import Layout from '../components/Layout'
import Video from '../components/Video'

import {
  SectionIntro,
  SectionEvent,
  SectionComunity,
  SectionTestimonials,
  SectionLastEvent,
  SectionSocialMedias,
  SectionSponsors,
  SectionTrails
} from '../styles/pages/index'

const Slider = dynamic(() => import('../components/Slider'), { ssr: false })

export const getStaticProps: GetStaticProps = async () => {
  const trails = await getTrails()

  return {
    props: {
      trails
    },
    revalidate: 1
  }
}

const Home: React.FC<{ trails: Trail[] }> = ({ trails }) => {
  return (
    <Layout title="DEVPIRA - 2020">
      <SectionIntro>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-info">
              <img
                src="/assets/logo-event.svg"
                alt=""
                className="img-fluid"
                width={540}
                height={156}
              />
              <h1>
                Mais conectados <br />
                que nunca
              </h1>
              <ButtonLink
                href="https://www.sympla.com.br/devpira-festival20__1004571"
                variant="secondary"
                target="_blank"
              >
                Inscreva-se
              </ButtonLink>
            </div>
            <div className="col-12 col-md-6 col-figure">
              <img
                src="/assets/people-group-1.svg"
                alt=""
                className="img-fluid figure"
                width={850}
                height={597}
              />
            </div>
          </div>
          <LinkScroll
            to="event"
            spy
            smooth
            offset={-80}
            className="btn-scroll-down"
          >
            <span>descer</span>
            <FaChevronDown />
          </LinkScroll>
        </div>
      </SectionIntro>

      <SectionEvent id="event">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="section-title">O Evento</h1>
              <p>
                O DevPira Festival é um evento de integração entre seres,
                ferramentas e metodologias. Acreditamos que a troca de
                conhecimentos e informação age de maneira efetiva sobre a
                qualidade profissional, por isso, idealizamos com muito carinho
                palestras, workshops e interações exclusivas a fim de podermos
                unir pontos e expandir a comunidade tecnológica no interior de
                São Paulo e no mundo.
              </p>
              <p>
                Teremos palestrantes de São Paulo, Portugal, Espanha e
                Piracicaba, trazendo seus pontos de vista individuais e
                coletivos sobre os mais diversos assuntos. O DevPira Festival
                não é somente um evento de tecnologia, é um evento para pessoas
                que transformam o futuro.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <img
                src="/assets/people-group-2.svg"
                alt=""
                className="img-fluid"
                width={445}
                height={363}
              />
            </div>
          </div>
        </div>
      </SectionEvent>

      <SectionComunity id="community">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="section-title">A comunidade</h1>
              <p>
                DEVPIRA é uma comunidade pensada para levar o desenvolvimento de
                software, produto e pessoas através de palestras, workshops e
                muito network!
              </p>
              <p>
                Atualmente contamos com mais de 850 pessoas conectadas trocando
                experiências! Venha fazer parte!
              </p>
              <ButtonLink href="https://linktr.ee/Devpira" target="_blank">
                Saiba mais
              </ButtonLink>
            </div>
            <div className="col-12 col-md-6">
              <img
                src="/assets/people-group-3.svg"
                alt=""
                className="img-fluid"
                width={445}
                height={325}
              />
            </div>
          </div>
        </div>
      </SectionComunity>

      <SectionTestimonials id="testimonials">
        <div className="container-fluid">
          <h1 className="section-title">Depoimentos</h1>
          <Slider
            className="slider"
            settings={{
              navPosition: 'bottom',
              autoHeight: true,
              responsive: {
                768: {
                  items: 2,
                  center: true
                },
                1200: {
                  items: 3,
                  center: true
                }
              }
            }}
          >
            <div className="card">
              <figure>
                <blockquote className="testimonial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  ac euismod velit. Proin cursus hendrerit leo eu vestibulum.
                  Nullam dictum, velit nec consectetur maximus, neque risus
                  consequat dui, sit amet iaculis mauris sapien non massa. Nam
                  cursus finibus tortor, vitae commodo leo eleifend eu.
                </blockquote>
                <footer className="author">
                  Fulano de tal - CTO na Fulano
                </footer>
              </figure>
            </div>
            <div className="card">
              <figure>
                <blockquote className="testimonial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  ac euismod velit. Proin cursus hendrerit leo eu vestibulum.
                  Nullam dictum, velit nec consectetur maximus, neque risus
                  consequat dui, sit amet iaculis mauris sapien non massa. Nam
                  cursus finibus tortor, vitae commodo leo eleifend eu. Nam
                  cursus finibus tortor, vitae commodo leo eleifend eu. Nam
                  cursus finibus tortor, vitae commodo leo eleifend eu.
                </blockquote>
                <footer className="author">
                  Fulano de tal - CTO na Fulano
                </footer>
              </figure>
            </div>
            <div className="card">
              <figure>
                <blockquote className="testimonial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  ac euismod velit. Proin cursus hendrerit leo eu vestibulum.
                  Nullam dictum, velit nec consectetur maximus, neque risus
                  consequat dui, sit amet iaculis mauris sapien non massa. Nam
                  cursus finibus tortor, vitae commodo leo eleifend eu.
                </blockquote>
                <footer className="author">
                  Fulano de tal - CTO na Fulano
                </footer>
              </figure>
            </div>
            <div className="card">
              <figure>
                <blockquote className="testimonial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  ac euismod velit. Proin cursus hendrerit leo eu vestibulum.
                  Nullam dictum, velit nec consectetur maximus, neque risus
                  consequat dui, sit amet iaculis mauris sapien non massa. Nam
                  cursus finibus tortor, vitae commodo leo eleifend eu. Nam
                  cursus finibus tortor, vitae commodo leo eleifend eu. Nam
                  cursus finibus tortor, vitae commodo leo eleifend eu.
                </blockquote>
                <footer className="author">
                  Fulano de tal - CTO na Fulano
                </footer>
              </figure>
            </div>
          </Slider>
        </div>
        <img src="/assets/person-1.svg" alt="" width={290} height={256} />
      </SectionTestimonials>

      <SectionTrails id="trails">
        <div className="container">
          <div className="row">
            <div className="col-9 col-md-6">
              <h1 className="section-title">Trilhas</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac euismod velit. Proin cursus hendrerit leo eu vestibulum.
                Nullam dictum, velit nec consectetur maximus, neque risus
                consequat dui, sit amet iaculis mauris sapien non massa. Nam
                cursus finibus tortor, vitae commodo leo eleifend eu.
              </p>
              <h2 className="featured-date">05/dezembro</h2>
            </div>
            <div className="col-3 col-md-6 col-lg-5">
              <figure>
                <img src="/assets/rocket.svg" alt="" />
              </figure>
            </div>
          </div>

          <div className="trails">
            {trails.map(
              trail =>
                trail.speeches.length > 0 && (
                  <section className="trail" key={trail.title}>
                    <header>
                      <h3 className="trail-title">{trail.title}</h3>
                    </header>
                    <Slider
                      className="trail-speeches"
                      settings={{
                        navPosition: 'bottom',
                        gutter: 20,
                        edgePadding: 60,
                        loop: false,
                        responsive: {
                          540: {
                            items: 2
                          },
                          768: {
                            items: 3
                          },
                          1024: {
                            items: 4,
                            edgePadding: 0,
                            nav: false
                          }
                        }
                      }}
                    >
                      {trail.speeches.map((lecture, index) => (
                        <div
                          className="trail-lecture"
                          key={lecture.theme + index}
                        >
                          <div className="lecture-content">
                            <div className="lecture-time">{lecture.time}</div>
                            {lecture.soon ? (
                              <div className="lecture-soon">Em breve</div>
                            ) : (
                              <>
                                <div className="lecture-center">
                                  <h4 className="lecture-speeker">
                                    {lecture.speaker}
                                  </h4>
                                  <div className="lecture-role">
                                    {lecture.role}
                                  </div>
                                </div>
                                <div className="lecture-title">
                                  {lecture.theme}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </section>
                )
            )}
          </div>
        </div>
      </SectionTrails>

      <SectionSponsors id="sponsors">
        <div className="container">
          <section>
            <h1 className="section-title">Iniciativa</h1>
            <div className="brands">
              {Array.from(Array(4).keys()).map(key => (
                <a
                  key={key}
                  href="https://devpira.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`https://logoipsum.com/logo/logo-${key + 8}.svg`}
                    alt=""
                    title="Logotipo"
                  />
                </a>
              ))}
            </div>
          </section>
          <section>
            <h1 className="section-title">Apoio</h1>
            <div className="brands">
              {Array.from(Array(14).keys()).map(key => (
                <a
                  key={key}
                  href="https://devpira.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`https://logoipsum.com/logo/logo-${16 - key}.svg`}
                    alt=""
                    title="Logotipo"
                  />
                </a>
              ))}
            </div>
          </section>
        </div>
      </SectionSponsors>

      <SectionLastEvent>
        <div className="container">
          <h1 className="section-title">
            <span>Último evento</span>
            <strong>{'< 2019 />'}</strong>
          </h1>
          <Video url="https://www.youtube.com/watch?v=fj49ubGadiM"></Video>
        </div>
      </SectionLastEvent>

      <SectionSocialMedias>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-8 col-left">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <h1 className="section-title">
                    Acompanhe nas <br /> redes sociais
                  </h1>
                </div>
                <div className="col-12 col-lg-6 col-medias">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/devpira/"
                        title="Página no Facebook"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <RiFacebookBoxFill /> <span>/</span>devpira
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/devpira_/"
                        title="Perfil no Instagram"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <RiInstagramFill /> <span>/</span>devpira_
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/devpira/"
                        title="Página no LinkedIn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <RiLinkedinBoxFill /> <span>/</span>company/devpira
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <img
                src="/assets/person-2.svg"
                alt=""
                width={424}
                height={468}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </SectionSocialMedias>
    </Layout>
  )
}

export default Home
