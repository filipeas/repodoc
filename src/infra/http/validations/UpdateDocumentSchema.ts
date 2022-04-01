import { boolean, object, string } from 'yup';

export const UpdateDocumentSchema = object({
    title: string().min(1).required(),
    description: string().min(1).nullable(),
    status: boolean().nullable(),
    privacy: boolean().nullable(),
});
