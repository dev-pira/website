import styled from 'styled-components'

export const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  width: 100%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 30px;
    overflow: hidden;
  }
`
