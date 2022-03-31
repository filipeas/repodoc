import { object, string } from 'yup';

export const CreateUserSchema = object({
  name: string().min(1).required(),
  email: string().min(1).required(),
  password: string().min(1).required(),
});
