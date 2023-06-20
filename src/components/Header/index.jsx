import { StyledHeader } from "./style";
import logo from "../../assets/Logo.svg"

export const Header = ({children}) => {
    return (
        <StyledHeader>
            <img src={logo} alt="" />
            {children}
        </StyledHeader>
    )
};
