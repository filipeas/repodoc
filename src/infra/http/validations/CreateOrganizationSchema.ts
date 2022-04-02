import { boolean, object, string } from 'yup';

export const CreateOrganizationSchema = object({
    user_id: string().min(1).required(),
    document_id: string().min(1).required(),
    level_id: string().min(1).required(),
});
