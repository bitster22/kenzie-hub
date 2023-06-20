import { forwardRef } from "react"
import { StyledError, StyledSelect } from "../../styles/form"
import { StyledContainer } from "./style"

export const Select = forwardRef(({children, error,...rest}, ref) => {
    return(
        <StyledContainer>
            <StyledSelect ref={ref} {...rest}>
                {children}
            </StyledSelect>
            {error ? <StyledError>{error.message}</StyledError> : null}
         </StyledContainer>
    )
})