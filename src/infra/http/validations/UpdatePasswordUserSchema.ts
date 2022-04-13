import { object, string } from 'yup';

export const UpdatePasswordUserSchema = object({
    c_password: string().min(1).required(),
    new_password: string().min(1).required(),
});
