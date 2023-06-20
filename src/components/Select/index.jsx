import { forwardRef } from "react";
import { StyledError, StyledSelect, StyledLabel } from "../../styles/form";
import { StyledContainer } from "./style";

export const Select = forwardRef(({ children, label, error, ...rest }, ref) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect ref={ref} {...rest}>
        {children}
      </StyledSelect>
      {error ? <StyledError>{error.message}</StyledError> : null}
    </StyledContainer>
  );
});
