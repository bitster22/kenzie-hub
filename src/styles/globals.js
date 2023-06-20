import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
	--color-primary: #ff577f;
	--color-primary-50: #ff427f;
	--color-primary-disable: #59323f;
	--grey-4: #121214;
	--grey-3: #212529;
	--grey-2: #343b41;
	--grey-1: #868e96;
	--grey-0: #f8f9fa;
	--sucess: #3fe864;
	--negative: #e83f5b;
	--toastify-color-success: var(--sucess);
  	--toastify-color-error: var(--negative);
}
.title-1 {
	font-size: 1.125rem;
	font-family: "Inter";
	font-weight: 700;
	font-style: normal;
	line-height: 28px;
	text-decoration: none;
	text-transform: none;
}
.title-2 {
	font-size: 1rem;
	font-family: "Inter";
	font-weight: 700;
	font-style: normal;
	line-height: 26px;
	text-decoration: none;
	text-transform: none;
}
.title-3 {
	font-size: 0.875rem;
	font-family: "Inter";
	font-weight: 700;
	font-style: normal;
	line-height: 24px;
	text-decoration: none;
	text-transform: none;
}
.headline {
	font-size: 0.75rem;
	font-family: "Inter";
	font-weight: 400;
	font-style: normal;
	line-height: 22px;
	text-decoration: none;
	text-transform: none;
}
.headline-bold {
	font-size: 0.75rem;
	font-family: "Inter";
	font-weight: 700;
	font-style: normal;
	line-height: 18px;
	text-decoration: none;
	text-transform: none;
}
.headline-italic {
	font-size: 0.75rem;
	font-family: "Inter";
	font-weight: 400;
	font-style: italic;
	line-height: 18px;
	text-decoration: none;
	text-transform: none;
}
`;
