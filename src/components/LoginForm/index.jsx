import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { Input } from "../Input";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const LoginForm = ({ setUser }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const navigate = useNavigate();

  const userLogin = async (formData) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);

      toast.success('Logado com sucesso, bem vindo(a) '+data.user.name, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setTimeout(()=>{
        navigate("/dashbord");
      }, 3000)
    } catch (error) {
        toast.error(error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            
    } finally {
      setLoading(false);
    }
  };

  const submit = async (formData) => {
    await userLogin(formData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      <ToastContainer/>
      <h1>Login</h1>
      <Input
        label="Email"
        type="email"
        {...register("email")}
        error={errors.email}
      />
      <Input
        label="Senha"
        type="password"
        {...register("password")}
        error={errors.password}
      />
      <button>{loading ? "Enviando..." : "Enviar"}</button>

      <p>Ainda não possui uma conta?</p>

      <Link to="/register">Cadastre-se</Link>
    </form>
  );
};
