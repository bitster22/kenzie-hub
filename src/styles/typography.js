import { css, styled } from "styled-components";

export const TextStyles = css`
  text-decoration: none;
  text-transform: none;
  font-style: normal;
  line-height: 150%;
`;

export const StyledTitleOne = styled.h1`
  ${TextStyles};
  font-size: 1.125rem;
  font-weight: 700;
`;

export const StyledHeadline = styled.p`
  ${TextStyles};
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--grey-1);
`;
