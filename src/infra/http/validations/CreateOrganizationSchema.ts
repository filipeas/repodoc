import { boolean, object, string } from 'yup';

export const CreateOrganizationSchema = object({
    title: string().min(1).required(),
});
