import { styled } from "styled-components";

export const StyledForm = styled.form`
  color: #f8f9fa;
  background-color: var(--grey-3);
  box-shadow: 0rem 0.25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .center {
    display: flex;
    justify-content: center;
  }
`;

export const StyledFormTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;

export const StyledInput = styled.input`
  background-color: var(--grey-2);
  height: 3rem;
  width: 100%;
  border: 0.0761rem solid var(--grey-2);
  padding-inline: 1rem;
  border-radius: 0.25rem;
  color: var(--grey-0);

  &::placeholder {
    color: var(--grey-1);
  }
`;

export const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 0.75rem;
`;

export const StyledError = styled.p`
  font-weight: 400;
  font-size: 0.625rem;
  color: var(--grey-1);
`;

export const StyledSelect = styled.select`
  height: 3rem;
  width: 100%;
  border: 0.0761rem solid var(--grey-2);
  padding-inline: 1rem;
  background-color: var(--grey-2);
  border-radius: 0.25rem;
  color: var(--grey-1);
`;
