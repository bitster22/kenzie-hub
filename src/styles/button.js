import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.25rem;
  background-color: var(--grey-3);
  font-weight: 600;
  font-size: 0.75rem;
  color: var(--grey-0);
  border-radius: 0.25rem;

  &:hover {
    background-color: var(--grey-2);
  }
`;

export const StyledBigLink = styled(Link)`
  padding: 1rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: var(--grey-1);
  border-radius: 0.25rem;
  font-size: 1rem;

  &:hover {
    background-color: var(--grey-2);
    font-weight: 500;
  }
`;

export const StyledButton = styled.button`
  padding: 1rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: var(--color-primary);
  border-radius: 0.25rem;
  font-size: 1rem;

  &:hover {
    background-color: var(--color-primary-50);
    font-weight: 500;
  }
`;
