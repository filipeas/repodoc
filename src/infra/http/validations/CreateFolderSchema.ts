import { boolean, object, string } from 'yup';

export const CreateFolderSchema = object({
    document_id: string().min(1).required(),
    title: string().min(1).required(),
    description: string().min(1).required(),
});
