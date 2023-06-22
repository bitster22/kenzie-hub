import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api";
import { registerFormSchema } from "./registerFormSchema";
import { Select } from "../Select";
import { StyledForm, StyledFormTextContainer } from "../../styles/form";
import { StyledHeadline, StyledTitleOne } from "../../styles/typography";
import { StyledButton } from "../../styles/button";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const navigate = useNavigate();

  const userRegister = async (formData) => {
    try {
      const body = {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        bio: formData.bio,
        contact: formData.contact,
        course_module: formData.course_module,
      };
      await api.post("/users", body);
      toast.success("Conta criada com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error("Ops! Algo deu errado", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const submit = async (formData) => {
    userRegister(formData);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <StyledFormTextContainer>
        <StyledTitleOne>Crie sua conta</StyledTitleOne>
        <StyledHeadline>Rápido e grátis, vamos nessa</StyledHeadline>
      </StyledFormTextContainer>
      <Input
        label="Nome"
        type="text"
        {...register("name")}
        error={errors.name}
        placeholder="Digite aqui seu nome"
      />
      <Input
        label="Email"
        type="email"
        {...register("email")}
        error={errors.email}
        placeholder="Digite aqui seu email"
      />
      <Input
        label="Senha"
        type="password"
        {...register("password")}
        error={errors.password}
        placeholder="Digite aqui sua senha"
      />
      <Input
        label="Confirmar Senha"
        type="password"
        {...register("confirm")}
        error={errors.confirm}
        placeholder="Digite novamente sua senha"
      />
      <Input
        label="Bio"
        type="text"
        {...register("bio")}
        error={errors.bio}
        placeholder="Fale sobre você"
      />
      <Input
        label="Contato"
        type="text"
        {...register("contact")}
        error={errors.contact}
        placeholder="Opção de contato"
      />
      <Select
        {...register("course_module")}
        label="Selecionar módulo"
        error={errors.course_module}
      >
        <option value="">Selecione um módulo</option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
      </Select>
      <StyledButton>Cadastrar</StyledButton>
    </StyledForm>
  );
};
