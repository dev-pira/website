import React, { HTMLAttributes, useEffect, useRef } from 'react'
import { tns, TinySliderSettings } from 'tiny-slider/src/tiny-slider'
import 'tiny-slider/dist/tiny-slider.css'

import { SliderContainer } from './styles'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  settings?: TinySliderSettings
}

const Slider: React.FC<SliderProps> = ({ children, settings, ...rest }) => {
  const sliderRef = useRef(null)
  const navRef = useRef(null)
  const slider = useRef(null)

  useEffect(() => {
    const defaultProps: TinySliderSettings = {
      container: sliderRef.current,
      controlsContainer: navRef.current
    }

    slider.current = tns({
      ...defaultProps,
      ...settings
    })
  }, [settings])

  return (
    <SliderContainer {...rest}>
      <div ref={sliderRef}>{children}</div>
      <nav ref={navRef} className="tns-controls">
        {settings.controlsText ? (
          <>
            <button type="button">{settings.controlsText[0]}</button>
            <button type="button">{settings.controlsText[1]}</button>
          </>
        ) : (
          <>
            <button type="button">
              <FiChevronLeft aria-hidden={true} />
              <span className="visually-hidden">Voltar</span>
            </button>
            <button type="button">
              <FiChevronRight aria-hidden={true} />
              <span className="visually-hidden">Avençar</span>
            </button>
          </>
        )}
      </nav>
    </SliderContainer>
  )
}

Slider.defaultProps = {
  settings: {}
}

export default Slider
