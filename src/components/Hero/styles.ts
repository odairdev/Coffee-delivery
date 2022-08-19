import styled from 'styled-components'

export const HeroContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 5.75rem 0;
  margin-bottom: 3rem;
`

export const HeroText = styled.div`
  padding-right: 1rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 800;
    color: ${props => props.theme['base-title']};
    line-height: 1.3;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    margin-top: 1rem;
    color: ${props => props.theme['base-subtitle']};
    max-width: 588px;
  }

  & > div {
    margin-top: 4rem;
    max-width: 580px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0;
    row-gap: 1.25rem;
  }
`

export const HeroItems = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    display: block;
    line-height: 1.3;
  }
`

const ICONS_COLORS = {
  orange: "yellow-dark",
  yellow: "yellow",
  gray: "base-text",
  purple: "purple"
} as const;

interface RoundIconProps {
  color: keyof typeof ICONS_COLORS;
}

export const RoundIcon = styled.div<RoundIconProps>`
  color: ${props => props.theme.white};
  background-color: ${props => props.theme[ICONS_COLORS[props.color]]};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
` 