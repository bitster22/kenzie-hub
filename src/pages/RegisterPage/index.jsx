import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/RegisterForm"

export const RegisterPage = () =>{
    return(
        <div>
            <div>
                <span>Kenzie Hub</span>
                <Link to="/">Voltar</Link>
            </div>
            <RegisterForm/>
        </div>
    )
}