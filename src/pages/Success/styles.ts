import styled from "styled-components";

export const SuccessContainer = styled.div`
  margin-top: 4rem;

  h1 {
    color: ${(props) => props.theme["yellow-dark"]};
    font-size: 2rem;
    font-family: "Baloo 2", cursive;
  }

  & > p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
  }

  & > div {
    display: flex;
    align-items: flex-start;
    margin-top: 2.5rem;
    justify-content: space-between;
  }

  & > div > .border-wrapper {
    position: relative;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
    border-radius: 6px 36px;
    padding: 1px 0.9px;
    /* min-width: 526px; */

    
  }

  @media (max-width: 1024px) {
    & img {
      width: 400px;
    }

    & > div {
      align-items: center;
    }
  }

  @media (max-width: 930px) {
    & img {
      width: 360px;
    }
  }

  @media (max-width: 860px) {
    & > div {
      flex-direction: column;
      align-items: flex-start;
    }

    & img {
      width: auto;
      margin-top: 1rem;
    }
  }

  @media (max-width: 540px) {
    & img {
      width: 360px;
    }
  }

  @media (max-width: 361px) {
    & img {
      width: 300px;
    }
  }
`;

export const DeliveryInfo = styled.div`
  /* border: 1px solid ${(props) => props.theme.purple}; */
  background-color: ${(props) => props.theme.background};
  border-radius: 6px 36px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  min-width: 526px;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 540px) {
    min-width: auto;
    gap: 1.5rem;
  }

  @media (max-width: 540px) {
    min-width: auto;
    gap: 1rem;
    padding: 1.5rem;
  }
`;

const ICONS_COLORS = {
  orange: "yellow-dark",
  yellow: "yellow",
  gray: "base-text",
  purple: "purple",
} as const;

interface RoundIconProps {
  color: keyof typeof ICONS_COLORS;
}

export const RoundIcon = styled.div<RoundIconProps>`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme[ICONS_COLORS[props.color]]};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
