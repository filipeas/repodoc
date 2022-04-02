import { boolean, object, string } from 'yup';

export const DeleteOrganizationSchema = object({
    user_id: string().min(1).required(),
    document_id: string().min(1).required(),
});
