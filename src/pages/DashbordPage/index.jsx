import { useNavigate } from "react-router-dom";
import { UserInfoDashbord } from "../../components/UserInfoDashbord";
import { Header } from "../../components/Header";
import { StyledLink } from "../../styles/button";
import { StyledContainerDashbord } from "../../styles/grid";
import { StyledBorder } from "./style";
import { ContentDashbord } from "../../components/ContentDashbord";

export const DashbordPage = ({ user }) => {
  return (
    <>
      <StyledContainerDashbord>
        <Header contentstyle="between">
          <StyledLink
            to="/"
            onClick={() => {
              localStorage.clear();
            }}
          >
            Sair
          </StyledLink>
        </Header>
      </StyledContainerDashbord>
      <StyledBorder>
        <StyledContainerDashbord>
          <UserInfoDashbord user={user} />
        </StyledContainerDashbord>
      </StyledBorder>
      <StyledContainerDashbord>
        <ContentDashbord />
      </StyledContainerDashbord>
    </>
  );
};
