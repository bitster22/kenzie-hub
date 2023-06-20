import { forwardRef } from "react";
import { StyledError, StyledInput, StyledLabel } from "../../styles/form";
import { StyledContainer } from "./style";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput ref={ref} {...rest} error={error ? true : false} />
      {error ? <StyledError>{error.message}</StyledError> : null}
    </StyledContainer>
  );
});
