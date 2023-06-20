import { css, styled } from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  padding: 1.5rem 0;

  ${({ contentstyle }) => {
    switch (contentstyle) {
      case "center":
        return css`
          justify-content: center;
        `;
      case "between":
        return css`
          justify-content: space-between;
        `;
    }
  }}
`;
