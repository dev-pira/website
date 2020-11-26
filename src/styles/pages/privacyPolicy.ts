import styled from 'styled-components'
import { lighten } from 'polished'

export const SectionIntro = styled.div`
  background: ${props => lighten(0.38, props.theme.colors.primary)}
    url('/assets/bg-intro.svg') fixed;
  background-image: url('/assets/bg-intro.svg');
  background-size: cover;
  width: 100%;
  position: relative;
  padding-top: 80px;

  h1 {
    font-size: 56px;
    margin: 30px 0;
    color: ${props => props.theme.colors.secondary};
  }

  .row {
    max-height: calc(100vh - 80px);
    padding: ${props => props.theme.grid.gap}px 0;
  }

  .col-info,
  .col-figure {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .col-figure {
    img {
      width: auto;
      max-width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 575px) {
    .col-figure {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    h1 {
      font-size: 84px;
    }
  }
`

export const SectionContent = styled.article`
  white-space: pre-line;
  padding: ${props => props.theme.grid.gap * 1.6}px 0;

  @media screen and (min-width: 768px) {
    padding: ${props => props.theme.grid.gap * 2.4}px 0;
  }

  h2 {
    font-size: 1.8em;
    color: ${props => props.theme.colors.secondary};
    margin-top: ${props => props.theme.grid.gap}px;
  }
`
