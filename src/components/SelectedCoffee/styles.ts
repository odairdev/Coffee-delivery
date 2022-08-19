import styled from "styled-components";

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  img {
    height: 4rem;
    width: 4rem;
  }

  .coffee-price {
    font-size: 1rem;
    font-weight: 700;
    margin-left: auto;
    color: ${(props) => props.theme["base-text"]};
  }

  .coffee-price::before {
    content: "R$ ";
    font-family: "Roboto", sans-serif;
  }

  & + & {
    margin-top: 2rem;
  }
`;

export const SelectedCoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 0.5rem;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .coffee-amount {
    padding: 0.25rem 0.75rem;
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-title"]};
    font-size: 1rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-right: -1rem;

    span {
      color: ${(props) => props.theme["purple"]};
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme["purple-dark"]};
      }
    }
  }
`;

export const RemoveButton = styled.button`
  border: 0;
  padding: 0.4rem 0.25rem;
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-title"]};
  font-size: 0.75rem;
  font-family: "Roboto", sans-serif;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }

  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;
