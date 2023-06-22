import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledForm } from "../../styles/form";
import { StyledBigLink, StyledButton } from "../../styles/button";
import { StyledHeadline, StyledTitleOne } from "../../styles/typography";

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
      toast.success("Logado com sucesso, bem vindo(a) " + data.user.name);
      setTimeout(() => {
        navigate("/dashbord");
      }, 3000);
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
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <StyledTitleOne className="center">Login</StyledTitleOne>
      <Input
        label="Email"
        type="email"
        placeholder="Digite seu email aqui"
        {...register("email")}
        error={errors.email}
      />
      <Input
        label="Senha"
        type="password"
        placeholder="Digite sua senha aqui"
        {...register("password")}
        error={errors.password}
      />
      <StyledButton>{loading ? "Enviando..." : "Enviar"}</StyledButton>

      <StyledHeadline className="center">
        Ainda não possui uma conta?
      </StyledHeadline>

      <StyledBigLink to="/register">Cadastre-se</StyledBigLink>
    </StyledForm>
  );
};
