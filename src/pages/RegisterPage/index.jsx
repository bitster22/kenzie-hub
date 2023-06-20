import { RegisterForm } from "../../components/RegisterForm";
import { StyledContainer } from "../../styles/grid";
import { Header } from "../../components/Header";
import { StyledLink } from "../../styles/button";

export const RegisterPage = () => {
  return (
    <StyledContainer>
      <Header contentstyle="between">
        <StyledLink to="/">Voltar</StyledLink>
      </Header>
      <RegisterForm />
    </StyledContainer>
  );
};
