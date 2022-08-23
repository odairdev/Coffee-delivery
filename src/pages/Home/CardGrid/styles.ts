import styled from 'styled-components'

export const GridContainer = styled.div`
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 845px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 465px) {
    grid-template-columns: 1fr;
    margin-left: 6rem;
  }

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
    margin-left: 3.5rem;
  }
`