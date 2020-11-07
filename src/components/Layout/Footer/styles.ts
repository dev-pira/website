import { lighten } from 'polished'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.secondary};
  padding: ${props => props.theme.grid.gap * 1.6}px 0;

  .row {
    > * {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }

  img {
    width: 80%;
    max-width: 100%;
    height: auto;
    filter: invert();
  }

  nav {
    ul {
      list-style: none;
      margin: 20px 0;
      margin-left: -16px;
      li {
        a {
          color: #fff;
          text-transform: uppercase;
          padding: 16px 24px;
          display: block;
          border-radius: 6px;
          transition: all 0.2s ease;
          &:hover {
            color: ${props => props.theme.colors.primary};
            background: ${props => lighten(0.05, props.theme.colors.secondary)};
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: ${props => props.theme.grid.gap * 2.4}px 0;

    img {
      width: auto;
    }
  }

  @media screen and (min-width: 1024px) {
    nav {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      ul {
        display: flex;
        margin-top: 0;
        margin-left: -8px;
        li {
          a {
            padding: 8px 16px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    padding: ${props => props.theme.grid.gap * 3.2}px 0;
    nav {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      ul {
        margin: 0;
      }
    }
  }
`
