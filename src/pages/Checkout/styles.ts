import styled from "styled-components";

export const CheckoutContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  section h2 {
    font-family: "baloo 2", cursive;
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 15px;
  }
`;
const baseForm = styled.form`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
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

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const PaymentForm = styled(baseForm)`
  margin: 1rem 0;

  & > div {
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
`;

export const SmallInput = styled(BaseInput)`
  max-width: 60px;
`;

interface PaymentMethodButtonProps {
  selected?: boolean;
}

export const PaymentMethodButton = styled.button<PaymentMethodButtonProps>`
  border: 0;
  border-radius: 6px;
  padding: 1rem;
  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${(props) =>
    props.selected ? props.theme["purple-light"] : props.theme["base-button"]};
  border: ${(props) =>
    props.selected ? `1px solid ${props.theme["purple-dark"]}` : 0};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const SelectedCoffees = styled.div`
  width: 28rem;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px 36px;
`;

export const CartSummary = styled.div`
  margin: 1.5rem 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["base-text"]};

    & + div {
      margin-top: 0.75rem;
    }

    p {
      font-size: 0.875rem;
    }

    span {
      font-size: 1rem;
    }

    &:last-child {
      font-weight: 700;

      p,
      span {
        font-size: 1.25rem;
        color: ${(props) => props.theme["base-subtitle"]};
      }
    }
  }
`;

export const SubmitOrderButton = styled.button`
  border: 0;
  width: 100%;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.875rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
