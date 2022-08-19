import styled from "styled-components";

export const CheckoutContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  section h2 {
    font-family: "baloo 2", cursive;
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 15px;
  }
`;
const baseForm = styled.form`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 2rem;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme["yellow-dark"]};
    }

    h3 {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1rem;
      font-weight: 400;
    }
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
    margin-left: 1.875rem;
  }
`;

export const DeliveryForm = styled(baseForm)`
  width: 40rem;
  border-radius: 6px;

  div {
    display: flex;
    align-items: center; 
    gap: 0.75rem;
  }
`;

export const BaseInput = styled.input`
  display: block;
  margin-bottom: 1rem;
  max-width: 200px;
  width: 100%;
  padding: 0.75rem;
  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-label"]};
`;

export const FullInput = styled(BaseInput)`
  max-width: none;
`

export const SmallInput = styled(BaseInput)`
  max-width: 60px;
`

export const SelectedCoffees = styled.div`
  width: 28rem;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px 36px;
`;
