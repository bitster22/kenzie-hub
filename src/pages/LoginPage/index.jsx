import { LoginForm } from "../../components/LoginForm";

export const LoginPage = ({setUser}) => {
  return (
    <div>
      <span>Kenzie Hub</span>
      <LoginForm setUser={setUser}/>
    </div>
  );
};

{/* <form action="">
  <h1>Login</h1>
  <label htmlFor="email">Email</label>
  <input type="email" name="" id="email" />
  <label htmlFor="password">Senha</label>
  <input type="password" name="" id="password" />
  <button>Entrar</button>
  <h3>Ainda não possui uma conta?</h3>
  <button>Cadastre-se</button>
</form>; */}
