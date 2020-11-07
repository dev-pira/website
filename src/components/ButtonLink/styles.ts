import { AnchorHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary'
}

export const AnchorContainer = styled.a<AnchorProps>`
  text-decoration: none;
  display: inline-flex;
  text-transform: uppercase;
  font-weight: bold;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 6px;
  transition: all 0.2s ease;

  ${props =>
    props.variant === 'primary' &&
    css`
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.secondary};

      &:hover {
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.primary};
      }
    `}

  ${props =>
    props.variant === 'secondary' &&
    css`
      background-color: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.primary};

      &:hover {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.secondary};
      }
    `}
`

AnchorContainer.defaultProps = {
  variant: 'primary'
}
