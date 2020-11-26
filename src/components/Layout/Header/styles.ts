import styled, { css } from 'styled-components'

interface HeaderProps {
  menuIsOpen: boolean
  isScrolled: boolean
}

export const HeaderContainer = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  transition: all 0.2s ease;

  .container {
    height: 80px;
    padding: 0 ${props => props.theme.grid.gap / 1.6}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.2s ease;

    > * {
      position: relative;
      z-index: 2;
    }
  }

  .header-left {
    display: flex;
    align-items: center;
    transition: all 0.2s ease;

    .btn-menu {
      display: none;
    }

    .logo {
      line-height: 0;
      order: 1;
      margin: 0 10px;
      img {
        height: 52px;
        transition: all 0.2s ease;
      }
    }
  }

  .menu {
    ul {
      list-style: none;
      li {
        a {
          display: flex;
          align-items: center;
          text-transform: uppercase;
          text-decoration: none;
          color: ${props => props.theme.colors.secondary};
        }
      }
    }
  }

  @media screen and (max-width: 1023px) {
    .header-left {
      .btn-menu {
        display: flex;
        appearance: none;
        background: none;
        border: 0;
        line-height: 0;
        font-size: 24px;
        width: 42px;
        height: 42px;
        align-items: center;
        justify-content: center;
        order: 0;
      }
    }

    .menu {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      background: ${props => props.theme.colors.secondary};
      display: flex;
      align-items: center;
      z-index: 1;

      transform: translate3d(-100%, 0, 0);
      transition: all 0.2s ease;

      > div {
        overflow: auto;
        max-height: 100%;
        width: 100%;
        ul {
          padding: 80px ${props => props.theme.grid.gap}px;
          width: 100%;
          li {
            a {
              color: #fff;
              font-size: 24px;
              font-weight: 300;
              padding: 16px;

              &.active {
                color: ${props => props.theme.colors.primary};
              }
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .menu {
      ul {
        li {
          display: inline-block;
          a {
            font-size: 16px;
            padding: 8px 16px;
            border-radius: 6px;
            border: solid 2px transparent;
            transition: all 0.2s ease;

            &:not(.active):hover {
              border-color: ${props => props.theme.colors.primary};
            }

            &.active {
              background: ${props => props.theme.colors.secondary};
              color: ${props => props.theme.colors.primary};
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1280px) {
    .container {
      height: 100px;
    }

    .header-left {
      .logo {
        img {
          height: 64px;
        }
      }
    }
  }

  ${props =>
    props.isScrolled &&
    css`
      background: #fff;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.03), 0 3px 6px rgba(0, 0, 0, 0.03);

      @media screen and (min-width: 1024px) {
        .container {
          height: 80px;
        }

        .header-left {
          .logo {
            img {
              height: 52px;
            }
          }
        }
      }
    `}

  ${props =>
    props.menuIsOpen &&
    css`
      @media screen and (max-width: 1023px) {
        .header-left {
          filter: invert();
        }

        .menu {
          transform: translate3d(0, 0, 0);
        }
      }
    `}
`
