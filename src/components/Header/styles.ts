import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & .cart {
    background-color: ${props => props.theme["yellow-light"]};
    border-radius: 6px;
    color: ${props => props.theme["yellow-dark"]};
    padding: 6px 8px;

  }
`;

export const UserLocation = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["purple-light"]};
  border-radius: 6px;
  color: ${(props) => props.theme["purple-dark"]};
  font-size: 0.875rem;
`;
