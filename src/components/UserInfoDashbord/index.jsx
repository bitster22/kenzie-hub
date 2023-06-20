import { StyledInfo } from "./style";
import { StyledHeadline, StyledTitleOne } from "../../styles/typography";
export const UserInfoDashbord = ({ user }) => {
  return (
    <StyledInfo>
      <StyledTitleOne>Olá, {user.name}</StyledTitleOne>
      <StyledHeadline>{user.course_module}</StyledHeadline>
    </StyledInfo>
  );
};
