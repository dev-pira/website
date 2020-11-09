import styled from 'styled-components'
import { darken, lighten, transparentize } from 'polished'

export const SectionIntro = styled.article`
  background: ${props => lighten(0.38, props.theme.colors.primary)}
    url('/assets/bg-intro.svg') fixed;
  background-image: url('/assets/bg-intro.svg');
  background-size: cover;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-top: 80px;

  h1 {
    font-size: 56px;
    margin: 30px 0;
    color: ${props => props.theme.colors.secondary};
  }

  .row {
    max-height: calc(100vh - 80px);
    min-height: 600px;
    padding: ${props => props.theme.grid.gap}px 0;
  }

  .col-info,
  .col-figure {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  @keyframes arrowDown {
    0% {
      transform: translate3d(0, -50%, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate3d(0, 50%, 0);
      opacity: 0;
    }
  }

  .btn-scroll-down {
    appearance: none;
    border: 0;
    background: none;
    position: absolute;
    bottom: 0;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    cursor: pointer;

    span {
      background: ${props => lighten(0.38, props.theme.colors.primary)};
      padding: 5px 10px;
      border-radius: 16px;
      border: dashed 1px ${props => props.theme.colors.primary};
    }

    svg {
      color: ${props => props.theme.colors.primary};
      font-size: 32px;
      margin: 10px 0;
      animation: arrowDown 1s infinite;
    }
  }

  @media screen and (max-width: 767px) {
    .col-info {
      justify-content: flex-end;
    }

    .col-figure {
      img {
        margin-left: ${props => props.theme.grid.gap * -1.5}px;
        margin-top: 30px;
        width: calc(100vw + ${props => props.theme.grid.gap}px);
        max-width: none;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .row {
      padding: 40px 0;
      min-height: 600px;
    }
  }

  @media screen and (min-width: 1024px) {
    .row {
      height: calc(100vh - 80px);
      padding: 40px 0;
    }

    h1 {
      font-size: 84px;
    }

    .col-figure {
      img {
        position: absolute;
        right: 0;
        max-width: 50vw;
        max-height: 90%;
      }
    }
  }
`
export const Section = styled.article`
  padding: ${props => props.theme.grid.gap * 1.6}px 0;

  .section-title {
    font-size: 48px;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.secondary};
  }

  @media screen and (min-width: 768px) {
    padding: ${props => props.theme.grid.gap * 2.4}px 0;

    .section-title {
      font-size: 64px;
    }
  }

  @media screen and (min-width: 1200px) {
    padding: ${props => props.theme.grid.gap * 3.2}px 0;
  }

  p:not(:last-of-type) {
    margin-bottom: 10px;
  }
`

export const SectionEvent = styled(Section)`
  .row {
    > *:last-child {
      margin-top: ${props => props.theme.grid.gap * 2}px;
      display: flex;
      justify-content: center;
      align-content: center;
    }
  }

  @media screen and (min-width: 768px) {
    .row {
      > * {
        &:first-child {
          order: 1;
        }
        &:last-child {
          margin-top: 0;
          justify-content: flex-start;
        }
      }
    }
  }
`

export const SectionComunity = styled(Section)`
  padding-top: ${props => props.theme.grid.gap}px;

  .row {
    > * {
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      &:last-child {
        justify-content: flex-end;
      }
    }
  }

  a {
    margin-top: ${props => props.theme.grid.gap}px;
  }

  @media screen and (max-width: 767px) {
    .row {
      > * {
        &:last-child {
          margin-top: ${props => props.theme.grid.gap * 2}px;
          justify-content: center;
        }
      }
    }
  }
`
export const SectionTestimonials = styled(Section)`
  position: relative;
  background: ${props => lighten(0.28, props.theme.colors.primary)};

  img {
    display: none;
  }

  .slider {
    margin: 0 ${props => props.theme.grid.gap * -1}px;
    width: 100vw;
    position: relative;

    .tns-controls {
      position: absolute;
      width: calc(100% - ${props => props.theme.grid.gap * 2}px);
      max-width: ${props => props.theme.grid.maxWidth}px;
      margin: auto;
      left: 0;
      right: 0;
      top: ${props => props.theme.grid.gap * -1}px;
      bottom: 0;
      pointer-events: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        background: ${props => props.theme.colors.primary};
        width: 45px;
        height: 45px;
        border-radius: 50%;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: all;
        transition: all 0.2s ease;
        &:first-child {
          transform: translate3d(-50%, 0, 0);
        }
        &:last-child {
          transform: translate3d(50%, 0, 0);
        }
        &:disabled {
          background: ${props => lighten(0.1, props.theme.colors.secondary)};
          color: ${props => lighten(0.2, props.theme.colors.secondary)};
          cursor: default;
        }
        &:not(:disabled):hover {
          background: ${props => lighten(0.1, props.theme.colors.primary)};
        }
      }
    }

    .tns-nav {
      button {
        &:before {
          background: ${props => props.theme.colors.primary};
        }

        &:not(.tns-nav-active):hover {
          &:before {
            background: ${props => darken(0.15, props.theme.colors.primary)};
          }
        }

        &.tns-nav-active {
          &:before {
            background: ${props => props.theme.colors.secondary};
          }
        }
      }
    }

    .card {
      padding: ${props => props.theme.grid.gap}px;
      figure {
        background: ${props => lighten(0.38, props.theme.colors.primary)};
        padding: ${props => props.theme.grid.gap * 1.2}px;
        border-radius: 30px;
        footer {
          margin-top: 10px;
          font-weight: bold;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .container-fluid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .slider {
      &:before,
      &:after {
        content: '';
        width: calc(25% - ${props => props.theme.grid.gap / 2}px);
        height: 100%;
        background: linear-gradient(
          to left,
          ${props =>
            transparentize(1, lighten(0.28, props.theme.colors.primary))},
          ${props =>
            transparentize(0, lighten(0.28, props.theme.colors.primary))}
        );
        position: absolute;
        top: 0;
        z-index: 1;
      }

      &:before {
        left: 0;
      }

      &:after {
        right: 0;
        transform: rotate(180deg);
      }

      .tns-controls {
        top: -30px;
        width: calc(50% - ${props => props.theme.grid.gap}px);
      }

      .tns-nav {
        margin-top: 20px;
      }

      .card {
        padding: ${props => props.theme.grid.gap / 2}px;
        figure {
          footer {
            text-align: right;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    img {
      display: block;
      position: absolute;
      bottom: 0;
      right: calc(50% + 15vw + ${props => props.theme.grid.gap * 3}px);
      z-index: 1;
    }

    .slider {
      &:before,
      &:after {
        width: calc(33.33% - ${props => props.theme.grid.gap / 2}px);
      }

      .tns-controls {
        width: calc(33.33% - ${props => props.theme.grid.gap}px);
      }
    }
  }
`

export const SectionLastEvent = styled(Section)`
  background: ${props => lighten(0.4, props.theme.colors.secondary)};

  .section-title {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    span {
      margin-right: 20px;
    }
    strong {
      display: inline-block;
      color: ${props => props.theme.colors.primary};
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .section-title {
      margin-bottom: 40px;
    }
  }
`

export const SectionSocialMedias = styled(Section)`
  img {
    display: none;
  }

  .row {
    > * {
      display: flex;
      align-items: center;
    }
  }

  .col-left {
    > .row {
      width: 100%;
    }
  }

  .col-medias {
    ul {
      list-style: none;
      li {
        a {
          color: ${props => props.theme.colors.secondary};
          font-family: ${props => props.theme.fonts.featured};
          text-decoration: none;
          display: flex;
          align-items: center;
          font-size: 24px;
          margin-bottom: 10px;

          svg {
            font-size: 48px;
            margin-right: 10px;
          }

          svg,
          span {
            color: ${props => props.theme.colors.primary};
            transition: all 0.2s ease;
          }

          span {
            font-weight: bold;
            margin-right: 2px;
          }

          &:hover {
            svg {
              color: ${props => props.theme.colors.secondary};
            }
            span {
              transform: translate3d(-5px, 0, 0);
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding-top: ${props => props.theme.grid.gap}px;
    padding-bottom: 0;

    img {
      display: inline;
    }
  }

  @media screen and (min-width: 1024px) {
    overflow: hidden;

    .col-medias {
      justify-content: center;
    }

    .section-title {
      margin-bottom: 0;
    }

    img {
      max-width: none;
    }
  }
`
export const SectionSponsors = styled(Section)`
  .row > * {
    &:first-child {
      margin-bottom: ${props => props.theme.grid.gap * 2}px;
      .section-title {
        color: ${props => props.theme.colors.primary};
      }
    }
    &:last-child {
      .section-title {
        color: ${props => props.theme.colors.body};
      }
    }
  }

  .brands {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    a {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      width: 50%;
      img {
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: 100%;
      }
    }
  }

  @media screen and (min-width: 576px) {
    .brands {
      a {
        width: 33.33%;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .section-title {
      text-align: center;
    }

    .brands {
      justify-content: center;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: ${props => props.theme.grid.gap * 4.8}px 0;

    .row > *:first-child {
      margin-bottom: 0;
      .brands {
        a {
          width: 70%;
        }
      }
    }
  }
`

export const SectionTrails = styled(Section)`
  background: ${props => props.theme.colors.secondary};
  color: #fff;
  position: relative;

  .section-title {
    color: ${props => props.theme.colors.primary};
  }

  .featured-date {
    font-size: 32px;
    margin-top: 20px;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.2s ease;
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }

  figure {
    position: absolute;
    right: 0;
    top: 0;
    overflow: hidden;
    transform: translate3d(0, ${props => props.theme.grid.gap * -1}px, 0);
    line-height: 0;
    img {
      transform: translate3d(50%, 0, 0);
    }
  }

  .trails {
    .trail {
      position: relative;
      margin-top: 40px;
      header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        h3 {
          font-size: 32px;
          color: ${props => props.theme.colors.primary};
          display: flex;
          align-items: center;
          flex: 1;
          &:after {
            content: '';
            flex: 1;
            display: flex;
            border-top: dotted 2px ${props => props.theme.colors.primary};
            height: 0;
            margin-left: 20px;
          }
        }
      }
      .trail-speeches {
        .trail-lecture {
          .lecture-content {
            background: ${props => lighten(0.2, props.theme.colors.secondary)};
            border-radius: 20px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            text-align: center;
            min-height: 100%;

            .lecture-center {
              width: 100%;
              padding: 10px 0;
              margin: 20px 0;
              text-decoration: none;
              border: dotted 1px transparent;
              border-radius: 12px;
              transition: all 0.2s ease;

              &:hover {
                background-color: ${props =>
                  lighten(0.22, props.theme.colors.secondary)};
                transform: translate3d(0, -2px, 0);
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.06),
                  0 10px 10px rgba(0, 0, 0, 0.08);
              }
            }

            .lecture-time,
            .lecture-role {
              color: ${props => props.theme.colors.primary};
            }

            .lecture-time,
            .lecture-speaker,
            .lecture-soon {
              font-family: ${props => props.theme.fonts.featured};
            }

            .lecture-role,
            .lecture-title {
              line-height: 1.2em;
            }

            .lecture-time,
            .lecture-soon {
              font-size: 32px;
            }

            .lecture-speaker {
              color: #fff;
              font-size: 24px;
            }

            .lecture-title {
              color: ${props => lighten(0.7, props.theme.colors.secondary)};
              margin: 5px 0;
            }

            .lecture-role {
              font-weight: bold;
            }

            .lecture-soon {
              display: flex;
              flex-direction: column;
              flex: 1;
              justify-content: center;
              align-items: center;
              width: 100%;
              &:before,
              &:after {
                content: '';
                display: flex;
                border-top: dotted 2px ${props => props.theme.colors.secondary};
                height: 0;
                width: 100%;
                margin: 10px 0;
              }
            }
          }
        }

        .tns-slider {
          display: flex;
        }

        .tns-nav {
          margin-top: 20px;
          button {
            &:before {
              background: ${props =>
                lighten(0.2, props.theme.colors.secondary)};
            }

            &:not(.tns-nav-active):hover {
              &:before {
                background: ${props =>
                  darken(0.15, props.theme.colors.primary)};
              }
            }

            &.tns-nav-active {
              &:before {
                background: ${props => props.theme.colors.primary};
              }
            }
          }
        }
      }
      .tns-controls {
        position: absolute;
        width: 100%;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        pointer-events: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        button {
          background: ${props => props.theme.colors.primary};
          width: 45px;
          height: 45px;
          border-radius: 50%;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: all;
          transition: all 0.2s ease;
          &:first-child {
            transform: translate3d(-50%, 0, 0);
          }
          &:last-child {
            transform: translate3d(50%, 0, 0);
          }
          &:disabled {
            background: ${props => lighten(0.1, props.theme.colors.secondary)};
            color: ${props => lighten(0.2, props.theme.colors.secondary)};
            cursor: default;
          }
          &:not(:disabled):hover {
            background: ${props => lighten(0.1, props.theme.colors.primary)};
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .featured-date {
      font-size: 40px;
    }

    .row {
      > *:last-child {
        position: relative;
      }
    }

    figure {
      top: auto;
      bottom: 0;
      transform: translate3d(0, 0, 0);
      img {
        transform: translate3d(0, 0, 0);
      }
    }
  }

  @media screen and (max-width: 1023px) {
    .tns-inner {
      margin: 0 30px !important;
    }

    .trail-speeches {
      margin: 0 ${props => props.theme.grid.gap * -1}px;
    }
  }

  @media screen and (min-width: 1024px) {
    .section-title {
      font-size: 88px;
    }

    .featured-date {
      font-size: 56px;
    }

    .trails {
      margin-top: 80px;
      .trail {
        header {
          h3 {
            font-size: 48px;
          }
        }
        .tns-controls {
          top: 58px;
        }
      }
    }
  }
`
