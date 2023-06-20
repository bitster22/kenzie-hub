import { Input } from "../Input"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { api } from "../../services/api";
import { registerFormSchema } from "./registerFormSchema";
import { Select } from "../Select";

export const RegisterForm = () =>{
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
     } = useForm({
        resolver: zodResolver(registerFormSchema),
     });

     const navigate = useNavigate();

     const userRegister = async (formData) =>{
        try {
            const body = {
                email: formData.email,
                password: formData.password,
                name: formData.name,
                bio: formData.bio,
                contact: formData.contact,
                course_module: formData.course_module
            }
            await api.post("/users", body);

            toast.success("Cadastro realizado com sucesso", {
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
                navigate("/");
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
        }
     }

     const submit = async (formData) =>{
        userRegister(formData);
        reset();
        //senha: 123456a@
     }

    return(
        <div>
            <h1>Crie sua conta</h1>
            <p>Rápido e grátis, vamos nessa</p>
            <ToastContainer/>
            <form onSubmit={handleSubmit(submit)} noValidate>
                <Input
                    label="Nome"
                    type="text"
                    {...register("name")}
                    error={errors.name}
                />
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
                <Input
                    label="Confirmar Senha"
                    type="password"
                    {...register("confirm")}
                    error={errors.confirm}
                />
                <Input
                    label="Bio"
                    type="text"
                    {...register("bio")}
                    error={errors.bio}
                />
                <Input
                    label="Contato"
                    type="text"
                    {...register("contact")}
                    error={errors.contact}
                />
                <Select {...register("course_module")} error={errors.course_module}>
                    <option value="">Selecione um módulo</option>
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                    <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
                </Select>
                <button>Enviar</button>
            </form>
        </div>
    )
}