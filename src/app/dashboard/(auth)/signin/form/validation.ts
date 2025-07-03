import { z } from "zod";

export const formschema = z.object({
    email : z.string({required_error: 'Email harus diisi'}).email({message: 'Email tidak valid'}),
    password : z.string ({required_error: 'password harus diisi'}).min(5, {message: 'Password harus memiliki minimal 5 character'})
})