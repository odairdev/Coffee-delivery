import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
  width: 16rem;
  height: 19rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -1rem;
    margin-bottom: 1rem;
  }

  p {
    font-family: "Baloo 2", cursive;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 0.5rem;
  }

  .coffee-description {
    font-size: 0.875rem;
    text-align: center;
    display: block;
    max-width: 13.5rem;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const CoffeeLabel = styled.span`
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 100px;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  font-size: 0.6125rem;
  font-weight: 700;
  display: block;
  margin-bottom: 1rem;
`;

export const CardFeatures = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-top: 2.25rem;

  .coffee-price {
    font-family: "Baloo 2", cursive;
    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => props.theme["base-text"]};
  }

  .coffee-price::before {
    content: "R$ ";
    font-size: 0.875rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }

  .coffee-amount {
    padding: 0.5rem;
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-title"]};
    font-size: 1rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      color: ${(props) => props.theme["purple"]};
      font-size: 1rem;
    }
  }
`;

export const AddToCartButton = styled.button`
  border: 0;
  background-color: ${props => props.theme["purple-dark"]};
  padding: 0.5rem;
  border-radius: 6px;
  color: ${props => props.theme.white};
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.purple}
  }
`