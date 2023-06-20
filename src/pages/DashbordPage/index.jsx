import { Link, useNavigate } from "react-router-dom"
import { UserInfoDashbord } from "../../components/UserInfoDashbord"

export const DashbordPage = ({user}) =>{
    const navigate = useNavigate();
    return(
        <div>
            <div>
                <span>Kenzie Hub</span>
                <button onClick={()=>{
                    localStorage.clear();
                    navigate("/")
                }}>Sair</button>
            </div>
                <UserInfoDashbord user={user}/>
        </div>
    )
}