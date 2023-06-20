import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
  .string()
  .nonempty("Digite o Email")
  .email("O e-mail fornecido é inválido."),
  password: z
  .string()
  .nonempty("Digite a senha")
});
