import React, { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import { FaChevronDown } from 'react-icons/fa'
import { Link as LinkScroll } from 'react-scroll'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import getTrails, { Trail } from '../data/trails'
import getTestimonials, { Testimonial } from '../data/testimonials'

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
  const testimonials = await getTestimonials()

  return {
    props: {
      trails,
      testimonials
    },
    revalidate: 120
  }
}

interface HomeProps {
  trails: Trail[]
  testimonials: Testimonial[]
}

const Home: React.FC<HomeProps> = ({ trails, testimonials }) => {
  const [windowSize, setWindowSize] = useState(0)

  useEffect(() => {
    setWindowSize(window.innerWidth)
  }, [])

  return (
    <Layout title="DevPira Festival 2020">
      <SectionIntro>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-info">
              <img
                src="/assets/logo-event.svg"
                alt="DEVPIRA Festival 2020 - 05 de Dezembro"
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

      {testimonials.length > 0 && (
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
                    edgePadding: windowSize / 4,
                    autoHeight: false,
                    autoplay: true,
                    autoplayHoverPause: true,
                    speed: 1000
                  },
                  1200: {
                    edgePadding: windowSize / 3
                  }
                }
              }}
            >
              {testimonials.map(testimonial => (
                <div key={testimonial.name} className="card">
                  <figure>
                    <blockquote className="testimonial">
                      {testimonial.text}
                    </blockquote>
                    <footer className="author">{testimonial.name}</footer>
                  </figure>
                </div>
              ))}
            </Slider>
          </div>
          <img src="/assets/person-1.svg" alt="" width={290} height={256} />
        </SectionTestimonials>
      )}

      <SectionTrails id="trails">
        <div className="container">
          <div className="row">
            <div className="col-9 col-md-6">
              <h1 className="section-title">Trilhas</h1>
              <p>
                Confira em nossas trilhas o conteúdo especial que preparamos em
                Back-end, Front-end, DevOps, UX/UI e Metodologias Ágeis para
                você!
              </p>

              <p>
                Tudo pensado com muito carinho e dedicação por{' '}
                <a
                  href="https://www.linkedin.com/in/carolineaalves/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Caroline Alves
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/maribeiromendes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mariana Ribeiro
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/renatodosanjoss/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Renato dos Anjos
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/murilobeltrame/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Murilo Beltrame
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/keellyreis/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kelly Reis
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/fabiobaldin/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fábio Baldin
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/claytonlotar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Clayton Lotar
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/barros42/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Matheus Barros
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/gabrielcordeirosantos/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gabriel Cordeiro
                </a>{' '}
                e{' '}
                <a
                  href="https://www.linkedin.com/in/viniciuscoder/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vinicius de Moraes
                </a>
                .
              </p>

              <p>Esperamos que goste! :D</p>
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
                            {lecture.photoUrl && (
                              <img
                                src={lecture.photoUrl}
                                alt={lecture.speaker}
                                className="lecture-image"
                              />
                            )}
                            <div className="lecture-time">{lecture.time}</div>
                            {lecture.active ? (
                              <div className="lecture-footer">
                                <a
                                  className="lecture-center"
                                  href={lecture.profileUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <h4 className="lecture-speaker">
                                    {lecture.speaker}
                                  </h4>
                                  <div className="lecture-role">
                                    {lecture.role}
                                  </div>
                                </a>
                                <div className="lecture-title">
                                  {lecture.theme}
                                </div>
                              </div>
                            ) : (
                              <div className="lecture-soon">Em breve</div>
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
          <div className="row">
            <div className="col-12 col-lg-4">
              <h1 className="section-title">Iniciativa</h1>
              <div className="brands">
                <a
                  href="https://devpira.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/assets/logos/devpira.png"
                    alt="Logotipo DEVPIRA"
                    width={267}
                    height={150}
                  />
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <h1 className="section-title">Apoio</h1>
              <div className="brands">
                <a href="https://pecege.com" target="_blank" rel="noreferrer">
                  <Image
                    src="/assets/logos/pecege.png"
                    alt="Logotipo Pecege"
                    width={267}
                    height={150}
                  />
                </a>
                <a
                  href="https://www.agtechgarage.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/assets/logos/agtech-garage.png"
                    alt="Logotipo AgTech Garage"
                    width={267}
                    height={150}
                  />
                </a>
                <a
                  href="https://www.pulsehub.com.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/assets/logos/pulse.png"
                    alt="Logotipo Pulse"
                    width={267}
                    height={150}
                  />
                </a>
              </div>
            </div>
          </div>
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
