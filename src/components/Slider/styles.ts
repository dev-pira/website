import styled from 'styled-components'

export const SliderContainer = styled.div`
  overflow: hidden;

  .tns-nav {
    display: flex;
    justify-content: center;
    button {
      width: 24px;
      height: 24px;
      appearance: none;
      background: none;
      border: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      &:before {
        content: '';
        width: 12px;
        height: 12px;
        background: #ccc;
        border-radius: 50%;
        transition: all 0.2s ease;
      }

      &.tns-nav-active {
        &:before {
          background: #777;
        }
      }
    }
  }

  .tns-controls {
    button {
      appearance: none;
      border: 0;
      background: none;
    }
  }
`
