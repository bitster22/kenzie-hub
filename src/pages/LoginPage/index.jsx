import { LoginForm } from "../../components/LoginForm";
import { StyledContainer } from "../../styles/grid";
import { Header } from "../../components/Header";

export const LoginPage = ({ setUser }) => {
  return (
    <StyledContainer>
      <Header contentstyle="center" />
      <LoginForm setUser={setUser} />
    </StyledContainer>
  );
};
