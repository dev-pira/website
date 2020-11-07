import { css, FlattenSimpleInterpolation } from 'styled-components'

interface Option {
  breakpoint: number
  prefix: string
}

const options: Option[] = [
  {
    breakpoint: 576,
    prefix: 'sm'
  },
  {
    breakpoint: 768,
    prefix: 'md'
  },
  {
    breakpoint: 992,
    prefix: 'lg'
  },
  {
    breakpoint: 1200,
    prefix: 'xl'
  }
]

interface ColumnsProps {
  columns: number
  prefix?: string
}

const createColumns = ({ columns, prefix }: ColumnsProps) =>
  Array.from(Array(columns).keys())
    .map(n => {
      const col = n + 1
      return `.col-${prefix ? `${prefix}-` : ''}${col} {
        flex: 0 0 auto;
        width: ${(col * 100) / columns}%
      }`
    })
    .join('')

interface GridSystem {
  columns: number
  gap: number
  maxWidth: number
}

export default function gridSystem({
  columns,
  gap,
  maxWidth
}: GridSystem): FlattenSimpleInterpolation {
  return css`
    .container,
    .container-fluid {
      padding: 0 ${gap}px;
    }

    .container {
      margin: 0 auto;
      max-width: ${maxWidth}px;
    }

    .container-fluid {
      max-width: 100%;
    }

    .row {
      display: flex;
      flex-wrap: wrap;
      margin-left: ${(gap / 2) * -1}px;
      margin-right: ${(gap / 2) * -1}px;

      > * {
        flex-shrink: 0;
        width: 100%;
        max-width: 100%;
        padding-right: ${gap / 2}px;
        padding-left: ${gap / 2}px;
      }
    }

    ${createColumns({ columns })}

    ${options
      .map(({ breakpoint, prefix }) => {
        return `
        @media screen and (min-width: ${breakpoint}px) {
          ${createColumns({ columns, prefix })}
        }
      `
      })
      .join('')}

    @media screen and (min-width: 1024px) {
      .container {
        padding: 0 ${gap / 2}px;
      }
    }
  `
}
