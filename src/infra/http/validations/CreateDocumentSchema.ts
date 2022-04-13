import { boolean, object, string } from 'yup';

export const CreateDocumentSchema = object({
    title: string().min(1).required(),
    description: string().min(1).required(),
    status: boolean().required(),
    privacy: boolean().required(),
});
