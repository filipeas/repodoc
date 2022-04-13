import { object, string } from 'yup';

export const UpdateUserSchema = object({
  name: string().min(1).required(),
});
