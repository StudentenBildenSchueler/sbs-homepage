import styled from 'styled-components'

export const Slides = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
`

export const Slide = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: ${p => (p.active ? 1 : 0)};
  visibility: ${p => (p.active ? `visible` : `hidden`)};
  transition: 1s ease-in-out;
  animation: ken-burns ${p => 6 * p.duration}s linear infinite;
  @keyframes ken-burns {
    0% {
      transform: scale(1) translate(0);
    }
    25% {
      transform: scale(1.1) translate(3%, 1%);
    }
    50% {
      transform: scale(1) translate(0);
    }
    75% {
      transform: scale(1.1) translate(-3%, -1%);
    }
    100% {
      transform: scale(1) translate(0);
    }
  }
`
