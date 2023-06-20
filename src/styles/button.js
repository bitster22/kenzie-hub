import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem;
    background-color: var(--grey-3);
    font-weight: 600;
    font-size: 0.75rem;
    color: var(--grey-0);
    border-radius: 0.25rem;
`