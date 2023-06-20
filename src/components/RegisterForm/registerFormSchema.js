import { z } from "zod";

export const registerFormSchema = z
  .object({
    email: z
      .string()
      .nonempty("O e-mail é obrigatório")
      .email("O e-mail fornecido é inválido"),
    password: z
      .string()
      .nonempty("A senha é obrigatória")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(\W)/, "É necessário ao menos um caracter especial")
      .regex(/(?=.*?[0-9])/, "É necessário ao menos um número.")
      .min(8, { message: "A senha precisa conter no mínimo 8 caracteres" }),
    confirm: z.string().nonempty("A confirmação de senha é obrigatória"),
    name: z.string().nonempty("O nome é obrigatório"),
    bio: z.string().nonempty("A biografia é obrigatória"),
    contact: z.string().nonempty("O contato é obrigatório"),
    course_module: z.string().nonempty("O módulo é obrigatório"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas não correspondem",
    path: ["confirm"],
  });
