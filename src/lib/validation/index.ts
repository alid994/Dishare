import * as z from 'zod'

export const RegisterValidation = z.object({
    name: z.string().min(2).max(50, { message: 'Name should be longer'}),
    surname: z.string().min(2).max(50, { message: 'Surname should be longer'}),
    username: z.string().min(2, {message:'Too short'}),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters!'})
})