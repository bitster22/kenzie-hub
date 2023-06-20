import { StyledHeader } from "./style";
import logo from "../../assets/Logo.svg";

export const Header = ({ children, contentstyle }) => {
  return (
    <StyledHeader contentstyle={contentstyle}>
      <img src={logo} alt="" />
      {children}
    </StyledHeader>
  );
};
