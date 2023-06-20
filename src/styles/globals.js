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
`;
